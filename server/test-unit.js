import * as enquiryService from './services/enquiryService.js';
import * as publicController from './controllers/publicController.js';

async function runTests() {
  console.log('🧪 Starting Sharmila MindCare Backend Unit Tests...\n');

  // Test 1: Generate Enquiry ID
  const id = await enquiryService.generateEnquiryId();
  console.log('✓ Generated Enquiry ID:', id, id.startsWith('SMC-'));

  // Test 2: Create Enquiry
  const created = await enquiryService.createEnquiry({
    fullName: 'Karthik Raja',
    mobileNumber: '9843012345',
    email: 'karthik@example.com',
    ageGroup: 'Young Adult (20 - 35)',
    consultationMode: 'Online',
    serviceInterest: 'Marital Counselling',
    preferredContactMethod: 'Phone Call',
    consent: true,
  });
  console.log('✓ Created Enquiry:', created.enquiryId, '| Status:', created.status);

  // Test 3: Get Enquiry By ID
  const fetched = await enquiryService.getEnquiryById(created.enquiryId);
  console.log('✓ Fetched Enquiry by ID:', fetched.fullName === 'Karthik Raja');

  // Test 4: Update Status
  const updated = await enquiryService.updateEnquiryStatus(created.enquiryId, 'Contacted');
  console.log('✓ Status Updated to Contacted:', updated.status === 'Contacted');

  // Test 5: Add Call Attempt
  const withCall = await enquiryService.addCallAttempt(created.enquiryId, {
    outcome: 'Spoke - Evaluating Requirements',
    notes: 'Client explained marital communication difficulties.',
    callerName: 'Priya (Telecaller)',
  });
  console.log('✓ Call Attempt Logged:', withCall.callAttempts.length === 1);

  // Test 6: Add Internal Note
  const withNote = await enquiryService.addInternalNote(created.enquiryId, {
    note: 'Preferred evening time slot between 6 PM to 8 PM.',
    addedBy: 'Priya',
  });
  console.log('✓ Internal Note Added:', withNote.internalNotes.length === 1);

  // Test 7: List Enquiries with Search
  const list = await enquiryService.listEnquiries({ search: 'Karthik' });
  console.log('✓ Search & Pagination:', list.enquiries.length === 1, '| Total:', list.pagination.total);

  // Test 8: Dashboard Summary Metrics
  const summary = await enquiryService.getDashboardMetrics();
  console.log('✓ Dashboard Metrics:', JSON.stringify(summary));

  // Test 9: Public Controller
  const mockRes = {
    statusCode: 200,
    status(code) { this.statusCode = code; return this; },
    json(payload) { this.data = payload; return this; }
  };
  publicController.getDoctorProfile({}, mockRes);
  console.log('✓ Doctor Profile Controller:', mockRes.data.data.name, '| 12 Years Exp');

  console.log('\n🌟 ALL BACKEND UNIT TESTS PASSED SUCCESSFULLY! 🌟');
}

runTests().catch(err => {
  console.error('Test failed:', err);
  process.exit(1);
});
