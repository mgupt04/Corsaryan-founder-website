/* ===== founders.ts ===== */
const FOUNDERS = [
{
  id:'andrei', name:'Andrei Bautista', short:'Andrei', role:'Founder & Chief Medical Officer', initials:'AB',
  badge:'Duke Research Scholar', hue:176,
  pitch:'Nationally and internationally recognized, award-winning pain and digital-health researcher. Leads cross-institutional studies with investigators at Duke, Mayo Clinic, MD Anderson, Cleveland Clinic and Mount Sinai.',
  card:'Nationally and internationally recognized, award-winning pain and digital-health researcher. Leads cross-institutional studies with investigators at Duke, Mayo Clinic, MD Anderson, Cleveland Clinic and beyond.',
  location:'University of Louisville · Duke Pain Medicine',
  email:'andrei.bautista@louisville.edu',
  highlights:['Research Scholar, Duke Division of Pain Medicine','Top 5 Abstract Award, ASIPP 2026 (podium)','3 PubMed papers · 3 PROSPERO protocols','Founder, The Mango Care Foundation (501(c)(3))'],
  education:[
    {school:'University of Louisville', detail:'B.S. Psychology · Dean’s Scholar · Henry Vogt Scholarship (top 150 applicants)', year:'Exp. Summer 2027'},
    {school:'duPont Manual High School', detail:'Valedictorian · 4.0 GPA · SAT 1510 · 13 AP / dual-credit · early graduate · AP Scholar', year:'2025'}],
  stats:[['3','PubMed papers'],['12','Orals & posters'],['600+','Pain-clinic hours']],
  tags:['Pain medicine','Health policy','Health economics','Digital health'],
  links:[{label:'Email',href:'mailto:andrei.bautista@louisville.edu',icon:'mail'},{label:'Mango Care patient safety',href:'https://mangocare.org/safety',icon:'ext'}],
  sections:[
   {title:'Corsaryn', items:[
    {title:'Founder, Corsaryn Recovery', meta:'May 2026 – Present', desc:'Founded an anesthesia-aware post-discharge recovery platform for outpatient regional anesthesia patients, initially focused on continuous peripheral nerve block catheter recovery after ambulatory orthopedic surgery.'},
    {title:'Product & clinical specifications', desc:'Product requirements document, information architecture, patient journey map, clinician workflow map, analytics/QI framework, block-resolution timelines, medication-transition reminders, catheter/pump issue workflows and APS callback prioritization.'},
    {title:'Regulatory-safe posture', desc:'Patient engagement, structured symptom capture, protocol support and human-reviewed clinician escalation, never autonomous diagnosis, prescribing, urgent triage or pump control.'},
    {title:'Pilot & patent strategy', desc:'Pilot plan for 100–250 patients with endpoints including after-hours call volume, severe rebound pain, opioid rescue timing, patient understanding, APS nurse time and escalation accuracy. Patent strategy around a finite-duration, anesthesia-aware recovery episode engine.'},
    {title:'NIH funding strategy', desc:'Developing grant strategies for platform validation, clinical workflow integration, recovery analytics and implementation-science evaluation.'},
    {title:'Regional Anesthesia Recovery State Machine', meta:'Lead author · in development', desc:'State-transition and microsimulation model of ambulatory cPNB recovery spanning block resolution, rebound risk, medication transition, catheter or pump problems, APS callbacks, escalation and closure.'}]},
   {title:'Research', items:[
    {title:'Duke Pain Medicine Research Scholar', meta:'Sept 2026 – Present', desc:'Mentored by Peter Yi, MD. Leading cross-institutional studies with Duke, Mayo Clinic, Cleveland Clinic, Icahn School of Medicine at Mount Sinai and MD Anderson.'},
    {title:'C-SAEM anesthesia economic framework', meta:'First author · Anesthesiology submission', desc:'CPT-stratified, procedure-level economic model with exploratory AA-ACT modeling, developed with collaborators from Cleveland Clinic, Mayo Clinic and Duke under Dr. Basem Abdelmalak.'},
    {title:'Decision consistency in federal IDR', meta:'Lead author · JAMA submission', desc:'National analysis of 2.2M+ dispute line items across arbitration entities, with an anesthesia subgroup.'},
    {title:'Medicare genicular nerve denervation', meta:'Lead author · JAMA submission', desc:'National Part B analysis 2020–2024 of trends, state-level variation and the pre-policy landscape across 25 states.'},
    {title:'Industry payments & Medicare SCS volume', meta:'Lead author · in development', desc:'Linked national study across 2,192 clinicians, 4,869 clinician-years and 256,725 service units. A companion study covers peripheral nerve stimulation.'},
    {title:'Operational costs of missed procedures', meta:'Lead author · accepted, Pain Physician', desc:'Five-month time-cost study of an academic pain clinic. Top 5 Abstract Award at ASIPP 2026.'},
    {title:'Cancer-pain education reviews', meta:'Lead author ×2 · Dr. Salahadin Abdi', desc:'Two narrative reviews of 14 studies each, on medical students and on residents, fellows and practicing physicians.'},
    {title:'Low-dose naltrexone in IBD', meta:'PROSPERO CRD420251148825', desc:'The largest systematic review of efficacy in inflammatory bowel disease, in preparation for the Journal of Crohn’s & Colitis.', href:'https://www.crd.york.ac.uk/PROSPERO/view/CRD420251148825'},
    {title:'Teleoncology & MD Anderson simulations', meta:'Co-lead author', desc:'Hub-and-spoke teleoncology simulation (Journal of Clinical Oncology submission) and pain-referral flow models at MD Anderson.'},
    {title:'Sickle cell disease multi-state modeling', meta:'Lead author · awaiting grant support', desc:'Three HCUP and T-MSIS claims studies on acute-care transitions, utilization phenotypes and Medicaid coverage continuity.'},
    {title:'Rural Pain Access Geospatial Network', meta:'Lead author · in development', desc:'National network analysis of clinician supply, travel burden and access gaps across pain, anesthesia, palliative care and oncology.'},
    {title:'Also in the pipeline', desc:'Submissions and manuscripts for JAMA, JAMA Health Forum, Anesthesiology, Regional Anesthesia & Pain Medicine, Pain Medicine, Pain Physician and Pain Medicine Case Reports, plus two book chapters.'}]},
   {title:'Publications & talks', items:[
    {title:'Sphenopalatine Ganglion Blocks in Headache Management: A Review', meta:'Brain Sciences 2025 · Editor’s Choice', href:'https://doi.org/10.3390/brainsci15070672'},
    {title:'Innovative Management of Opioid-Induced Hyperalgesia Using Lidocaine Infusion', meta:'Cureus 2024 · first author', href:'https://doi.org/10.7759/cureus.66376'},
    {title:'Real-Time PPE Compliance and Clinical Tool Monitoring Using Generative AI', meta:'Cureus 2025 · co-author, led the research team', href:'https://pubmed.ncbi.nlm.nih.gov/41280963/'},
    {title:'Operational Costs of Missed Procedures in an Academic Pain Center', meta:'Oral · ASIPP 2026, New Orleans', desc:'Top 5 Abstract Award winners’ presentation.'},
    {title:'Alpha-Gal Reaction Risk Before Cardiopulmonary Bypass', meta:'Selected oral + poster · Research!Louisville 2026', desc:'A Bayesian cross-cohort analysis, ranked among the top abstracts.'},
    {title:'Navigating the Opioid Crisis', meta:'Oral · Global Health Leaders Conference, Johns Hopkins 2024'},
    {title:'Seven further posters', meta:'ASIPP, KSA, Research!Louisville 2026', desc:'Topics include infected intrathecal pumps, vertebral augmentation for opioid cessation, prenylation screening, trigeminal neuralgia referral and recovery after colorectal surgery.'},
    {title:'Ad hoc reviewer', meta:'Journal of Clinical Anesthesia · 2026'}]},
   {title:'Policy & advocacy', items:[
    {title:'Administrative Assistant to the President, KYSIPP', meta:'2025 – Present', desc:'Engages state and national House nominees on physician-led interventional pain care.'},
    {title:'Patient voices to CMS', desc:'Used Mango Care’s outreach network to collect 18 firsthand testimonials, forwarded to the ASA for its CMS submissions.'},
    {title:'CRNA & pain-medicine policy reports', desc:'National landscape review of 91 public findings across 30+ states.'},
    {title:'Kentucky SB 88', meta:'KSA Policy Advocate · 2024 – 2026', desc:'Generated thousands of emails and voicemails to legislators.'},
    {title:'Fast-Track Anesthesia IPM curriculum', meta:'Founder & developer', desc:'Proposed a 4-year, anesthesia-only interventional pain medicine pathway.'},
    {title:'ASIPP medical-student pipeline', meta:'Outreach lead · 2026 – Present', desc:'Building a mentorship, research and advocacy pipeline for medical students.'}]},
   {title:'Ventures & service', items:[
    {title:'The Mango Care Foundation', meta:'President & Founder · 2023 – Present', desc:'Registered the 501(c)(3). Care packages for hospitalized children across Kentucky, Ohio, India and Vietnam: $10,000+ raised, 150+ gifts delivered.'},
    {title:'Mango Capital LLC', meta:'CFO · 2024 – Present', desc:'Equipment leasing firm. Directed deployment of $400,000+ in equipment.'},
    {title:'Purple Solutions LLC', meta:'CFO · 2026 – Present', desc:'Physician staffing and locum tenens in anesthesiology and pain medicine.'},
    {title:'Mango Solutions LLC', meta:'CFO · 2026 – Present', desc:'Healthcare staffing connecting physicians with short-term opportunities in underserved regions.'},
    {title:'Frosthaven LLC', meta:'Chief Executive Member · 2026 – Present', desc:'E-commerce brand for cold plunge tubs. Built supplier research, financial infrastructure, a Shopify storefront and marketing automation.'},
    {title:'Journal of Innovative Student Research', meta:'Board member · 2024 – 2025', desc:'Expanded reach to high school students across the U.S. and abroad.'},
    {title:'Kentucky IP Alliance', meta:'Innovator participant · 2026 – Present'}]},
   {title:'Clinical experience', items:[
    {title:'Pain technician & volunteer, UofL Pain Medicine', meta:'2020 – 2026 · 600+ hours', desc:'Supported ESIs, MBBs, RFAs, SI joint and peripheral nerve blocks. Prepared sterile fields, managed injectates and performed CPT/ICD-10 coding.'},
    {title:'Anesthesiology & critical care shadowing', meta:'2024 – 2026 · 100+ hours', desc:'Full perioperative care from induction to PACU handoff, ICU rounds, and an extubation under supervision.'},
    {title:'Internal medicine shadowing', meta:'2024 – 2026 · 50+ hours', desc:'Inpatient hospitalist teams and chronic pain consults.'},
    {title:'Rural pain medicine & neurology', meta:'TJ Samson Community Hospital, Glasgow KY · 2026', desc:'Observed access barriers, referral patterns and opioid-sparing strategies in a rural community hospital.'}]},
   {title:'Honors', items:[
    {title:'Top Abstract Award', meta:'ASIPP 2026', desc:'One of the most competitive abstract cycles; selected for podium presentation.'},
    {title:'Abstract Award Winner', meta:'Kentucky Society of Anesthesiologists'},
    {title:'Editor’s Choice Article', meta:'Brain Sciences'},
    {title:'Top Abstract Selection', meta:'Research!Louisville 2026'},
    {title:'Featured by the ASA', meta:'Official LinkedIn & Instagram', desc:'Third external repost in page history; reposted by the ASA President for patient-safety advocacy.'},
    {title:'Dean’s Scholar, twice', meta:'Fall 2025 · Spring 2026', desc:'Highest academic award in two UofL schools.'},
    {title:'Concert pianist', desc:'5-time Carnegie Hall soloist invitee, invited to the Opéra Bastille, and 1st place at five international competitions.'},
    {title:'Science Olympiad & HOSA', desc:'State 1st in Disease Detectives and Bridge; HOSA state 1st in Organic Chemistry; 2nd in the Kentucky Personal Finance Challenge (400 teams).'}]},
   {title:'Training & conferences', items:[
    {title:'National meetings', desc:'ASIPP (2023 – 2026), ASA 2024, ASRA 2024, AAPM 2024, KSA (2024, 2026).'},
    {title:'Johns Hopkins Global Health Leaders', meta:'3-time attendee · 9.3% acceptance rate'},
    {title:'Certifications', desc:'BSL-2, Human Subjects & HIPAA Research, Good Clinical Practice, Responsible Conduct of Research.'},
    {title:'Laboratory skills', desc:'Gel electrophoresis, RNA isolation, cDNA conversion, RT-PCR / PCR.'}]}
  ]
},
{
  id:'rajaram', name:'Rajaram Gairaboni', short:'Rajaram', role:'Co-Lead Systems Architect', initials:'RG',
  badge:'GEMS · 1 of 10 statewide', hue:14,
  pitch:'Builds the AI and temporal-inference architecture, secure recovery workflows and clinician-facing software. Research record spans Cincinnati, Louisville, MD Anderson and Duke.',
  card:'Builds the AI and temporal-inference architecture, secure recovery workflows and clinician-facing software. Research record spans Cincinnati, Louisville, MD Anderson and Duke.',
  location:'University of Louisville · ram.gairaboni@gmail.com',
  email:'ram.gairaboni@gmail.com',
  highlights:['GEMS Program: 1 of 10 students statewide','Second author, Cureus (PubMed-indexed)','3 patent-developing medical device concepts','Compiled 15+ patient narratives for CMS review'],
  education:[
    {school:'University of Louisville', detail:'Guaranteed Entrance to Medical School (GEMS) Program · Henry Vogt Scholarship ($64,000)', year:'Class of 2030'},
    {school:'duPont Manual High School', detail:'Valedictorian · 3.9 UW / 4.27 W GPA · 16 AP / dual-credit', year:'2026'}],
  stats:[['1 of 10','GEMS, statewide'],['15+','Patient narratives'],['3','Device concepts']],
  tags:['Systems architecture','Bioinformatics','Medical devices','Advocacy'],
  links:[{label:'Email',href:'mailto:ram.gairaboni@gmail.com',icon:'mail'},{label:'Cureus paper',href:'https://pubmed.ncbi.nlm.nih.gov/41280963/',icon:'ext'}],
  sections:[
   {title:'Research', items:[
    {title:'AI video surveillance for hospital safety protocols', meta:'Second author · Cureus (PubMed-indexed) · Univ. of Cincinnati', desc:'Mentored by Dr. Shuchita Garg, Medical Director of the UCMC Pain Clinic. Supervised and guided the paper’s development and publication process.', href:'https://pubmed.ncbi.nlm.nih.gov/41280963/'},
    {title:'PrenylFinder & Physcomitrium patens proteome', meta:'UofL · Dr. Mark Running', desc:'Browser-based tool that screens FASTA sequences for prenylation-compatible C-terminal motifs, plus computational prioritization of candidates through motif detection, sequence analysis and conservation-based ranking.'},
    {title:'Microbiome–brain research', meta:'UofL · Dr. Naveen Nagarajan · 2026 – Present', desc:'Technical review for Nature Reviews Neuroscience, a systematic review for Molecular Psychiatry, and a cross-cohort study of ~2,600 pediatric participants. PROSPERO CRD420261470724.', href:'https://www.crd.york.ac.uk/PROSPERO/view/CRD420261470724'},
    {title:'Ubiquilin systematic review', meta:'MD Anderson & Duke · Dr. Salahadin Abdi', desc:'Synthesized 11 studies in breast cancer; built the extraction pipeline with ROBINS-I/RoB2 risk-of-bias assessment and GRADE grading, and independently verified effect estimates.'}]},
   {title:'Innovation', items:[
    {title:'Corsaryn Recovery', meta:'Founding member · 2023 – Present', desc:'cPNB catheter follow-up, rebound-pain prevention, troubleshooting, APS workflow compression, clinician-routed escalation and structured episode documentation.'},
    {title:'Anesthesia Gas Leak Monitor', meta:'Patent developing', desc:'Real-time gas concentration tracking with improved sensor precision and integrated alerts for anesthesiologists.'},
    {title:'Wearable Iontophoresis Delivery System', meta:'Patent developing · led', desc:'Needle-free, refillable transdermal delivery device. Submitted to AAPM and MIT Hacking Medicine.'},
    {title:'Airway-Stabilizing CPR Collar', meta:'Patent developing', desc:'Co-developed and 3D-printed a crank-based neck brace to secure head-tilt and ventilation alignment during cardiac arrest.'},
    {title:'SepsiAlert', meta:'Governor’s School for Entrepreneurs', desc:'Early-warning system for timely sepsis detection using real-time monitoring and automated alerts.'}]},
   {title:'Leadership & service', items:[
    {title:'Policy advocacy contributor', meta:'National Pain Management Initiative with the ASA · 2025 – Present', desc:'Compiled 15+ patient narratives in 3 weeks to oppose CMS LCD L40260; the cases were presented to CMS.'},
    {title:'Interim President, The Mango Care Foundation', meta:'2024 – Present', desc:'Directs budgeting and fundraising; helped raise $5,000+ and opened partnerships with Baptist Palliative Care, Norton Healthcare, nursing homes, Georgia and India.'},
    {title:'Telugu Association of Kentuckiana', meta:'Cultural Lineup Manager · 2023 – Present', desc:'Runs programming for events of 100+ attendees with a team of five.'},
    {title:'Black Belt Instructor', meta:'Mission Martial Arts · 2017 – Present', desc:'Leads groups of 25+ students.'},
    {title:'Hospital volunteering', meta:'Baptist & Norton Healthcare · 65+ hours', desc:'Patient discharge support and hospital operations.'}]},
   {title:'Programs & honors', items:[
    {title:'GEMS Program', meta:'University of Louisville · 2026', desc:'Provisional admission to the School of Medicine; one of only 10 students statewide.'},
    {title:'Henry Vogt Scholarship', meta:'$64,000 over 4 years'},
    {title:'Governor’s School for Entrepreneurs', meta:'2025 · ~30% acceptance rate'},
    {title:'Harvard VISION Global Health Leadership Conference', meta:'2025'},
    {title:'TSA Webmaster', meta:'2nd State & Regional · National qualifier', desc:'Also 2nd Regional Audiopodcast and 3rd Regional UX Design.'},
    {title:'DECA Franchise Business Plan', meta:'National qualifier · 3rd State'},
    {title:'Personal Finance Challenge', meta:'2nd place statewide (150+ teams)'},
    {title:'School chess champion · Violinist since 2016'}]}
  ]
},
{
  id:'manit', name:'Manit Gupta', short:'Manit', role:'Co-Lead Systems Architect', initials:'MG',
  badge:'PubMed first author', hue:218,
  pitch:'AI researcher and engineer building safe, edge-deployable machine learning, from conformal risk control on a $100 device to a PubMed-published clinical vision system.',
  card:'AI researcher and engineer building safe, edge-deployable machine learning, from conformal risk control on a $100 device to a PubMed-published clinical vision system.',
  location:'University of Louisville · manit.gupta@gmail.com',
  email:'manit.gupta@gmail.com',
  highlights:['4.0 GPA · CS (AI/ML), Speed School','First author, PubMed-indexed paper (PMID 41280963)','Congressional App Challenge, 3rd place','Broadcom MASTERS state 1st · TSA national finalist'],
  education:[
    {school:'University of Louisville · J.B. Speed School of Engineering', detail:'B.S. Computer Science (AI/ML) · Minors in Mathematics and Industrial & Systems Engineering', year:'Exp. May 2029'},
    {school:'duPont Manual High School', detail:'Valedictorian · GPA 4.22 W / 3.83 UW · SAT 1400 · AP Scholar · Governor’s Scholar', year:'2026'}],
  stats:[['4.0','GPA'],['95.8%','PPE system accuracy'],['6','Research roles']],
  tags:['AI safety','Edge ML','Computer vision','Bioinformatics'],
  links:[{label:'LinkedIn',href:'https://linkedin.com/in/manit-gupta-2261b534b',icon:'in'},{label:'GitHub',href:'https://github.com/mgupt04',icon:'gh'},{label:'Email',href:'mailto:manit.gupta@gmail.com',icon:'mail'}],
  skills:['Python','R','Java','C++','JavaScript','SQL','PyTorch','LightGBM','OpenCV','llama.cpp','Conformal prediction','SHAP','GCP Vertex AI','Azure','PostgreSQL','MongoDB','Raspberry Pi 5','Jetson Orin Nano','ESP32-S3','Django','Flask','Node.js','Electron','Git / CI/CD'],
  sections:[
   {title:'Research', items:[
    {title:'H-CASES: certified escalation on a $100 edge device', meta:'Independent researcher · Dr. Luis Segura, UofL · research letter in progress', desc:'Conformal risk-control evaluation of an 8-bit VLM on a Raspberry Pi 5 with pre-registered thresholds; both targets met on 368 held-out cases.'},
    {title:'Gut microbiome–autism multi-omics', meta:'Technical lead · Dr. Naveen Nagarajan · UofL / Norton Children’s', desc:'Family-disjoint validation cut the family-wise false-positive rate from 10.71% to 5.41%. Quantified how naive cross-validation inflated AUROC from 0.738 to 0.770.'},
    {title:'Real-time PPE compliance with generative AI', meta:'First author · Cureus · PMID 41280963', desc:'95.8% accuracy and 100% specificity across 168 mannequin trials. Full publication-fee waiver as 1 of 3 papers selected globally; patent-pending. Mentor: Dr. Shuchita Garg.', href:'https://pubmed.ncbi.nlm.nih.gov/41280963/'},
    {title:'PrenylFinder', meta:'First-author poster · Research!Louisville 2026', desc:'100% recovery of canonical Rab-type GTPases; recall improved from 68% to 84.7% on lab-verified UniProt sites. Client-side parsing of multi-megabyte proteomes with no UI latency.'},
    {title:'Plant proteome prenylation screening', meta:'Second-author poster · Research!Louisville 2026', desc:'Surfaced 837 and 663 candidates in two proteomes with 35–51× motif enrichment.'},
    {title:'Neurodegenerative transcriptomics', meta:'Co-author poster · Research!Louisville 2026', desc:'Tested whether a signature learned in one neurodegenerative disease generalizes to another.'}]},
   {title:'Projects', items:[
    {title:'Corsaryn Recovery', meta:'Founding member · 2023 – Present', desc:'Co-architecting the clinical recovery-orchestration platform for outpatient anesthesia: catheter follow-up, rebound-pain prevention and automated escalation.'},
    {title:'EyeNova', meta:'Assistive edge-AI wearable · 2025 – Present', desc:'A $30–$100 wearable giving blind and low-vision users real-time spatial guidance, with 95%+ voice-command accuracy against $5,000+ alternatives.'},
    {title:'Diabetes Management Digital Twin', meta:'Congressional App Challenge · 3rd place', desc:'Full-stack twin simulating glucose outcomes for 25 type-1 patients.'},
    {title:'Text-to-rule edge surveillance', meta:'2025 – 2026', desc:'Converts safety documents into machine-enforceable monitoring rules on a Raspberry Pi.'}]},
   {title:'Leadership', items:[
    {title:'FrostHaven', meta:'Co-Founder · Technical & Sales Lead', desc:'Built the storefront and API fulfillment integrations.'},
    {title:'The Mango Care Foundation', meta:'Co-Founder · Executive VP', desc:'Delivered 150+ care packages to hospitalized children.'},
    {title:'NASA Space Apps Challenge', meta:'Local Lead', desc:'Coordinates participant recruitment.'},
    {title:'EyeNova engineering lab', meta:'Co-founder', desc:'Nonprofit lab that trained a cohort of student engineers in Python and computer vision.'},
    {title:'ISKCON Louisville', meta:'Lead Web Infrastructure Intern · Core Leader', desc:'Revived a dormant youth music program into a touring ensemble.'},
    {title:'UofL Speed School Outreach', meta:'Robotics camp mentor', desc:'Reversed a program rejection by advocating for a student with autism.'}]},
   {title:'Honors', items:[
    {title:'Henry Vogt Scholarship', meta:'$64,000 over 4 years'},
    {title:'Congressional App Challenge', meta:'3rd place, Louisville · WDRB News'},
    {title:'Broadcom MASTERS', meta:'National qualifier · 1st at state'},
    {title:'TSA National Finalist', meta:'Webmaster 6th · Debate 10th · State Champion, Webmaster'},
    {title:'2× Wyatt State Debate Champion', meta:'3× Best Speaker · TOC Digital qualifier'},
    {title:'Valedictorian · Governor’s Scholars · KSA Distinction', meta:'AP Scholar · National Recognition Program'},
    {title:'Seal of Biliteracy', meta:'Hindi, Punjabi, Spanish'},
    {title:'Taekwondo black belt', meta:'State champion · international competitor'}]}
  ]
}];

/* ===== publications.ts ===== */
const PEER_REVIEWED = [
 {title:'Real-Time PPE Compliance and Clinical Tool Monitoring Using Generative AI', venue:'Cureus 17(10): e95182', year:'2025', authors:'Gupta M, Gairaboni R, Bautista A, et al.', href:'https://doi.org/10.7759/cureus.95182'},
 {title:'Sphenopalatine Ganglion Blocks in Headache Management: A Review', venue:'Brain Sciences 15(7): 672', year:'2025', authors:'Bautista AL, Coyne K, Bautista A, Abd-Elsayed A', href:'https://doi.org/10.3390/brainsci15070672'},
 {title:'Innovative Management of Opioid-Induced Hyperalgesia Using Lidocaine Infusion: A Case Report', venue:'Cureus 16(8): e66376', year:'2024', authors:'Bautista A, Ferguson R, Elmati PR, Bautista A', href:'https://doi.org/10.7759/cureus.66376'}];
const PROTOCOLS = [
 {title:'Low-Dose Naltrexone for Inflammatory Bowel Disease: A Stratified Meta-Analysis', venue:'PROSPERO CRD420251148825', year:'2025', href:'https://www.crd.york.ac.uk/PROSPERO/view/CRD420251148825'},
 {title:'Ubiquilin (UBQLN1-4) Expression in Breast Cancer: A Systematic Review', venue:'PROSPERO CRD420251164726', year:'2025', href:'https://www.crd.york.ac.uk/PROSPERO/view/CRD420251164726'},
 {title:'Gut Microbiome Functional Features in Pediatric Autism: Cross-Cohort Reproducibility', venue:'PROSPERO CRD420261470724', year:'2026', href:'https://www.crd.york.ac.uk/PROSPERO/view/CRD420261470724'}];
const TALKS = [
 {title:'Operational Costs of Missed Procedures in an Academic Pain Center', venue:'ASIPP Annual Meeting · podium', year:'2026'},
 {title:'Clinical Ascertainment and Alpha-Gal Reaction Risk Before Cardiopulmonary Bypass', venue:'Research!Louisville · selected oral + poster', year:'2026'},
 {title:'Proteome-Scale C-Terminal Motif Screening Identifies Putative Prenylation Candidates', venue:'Research!Louisville poster', year:'2026'},
 {title:'PrenylFinder: A Client-Side Motif Scanner for Putative Prenylated Proteins', venue:'Research!Louisville poster', year:'2026'},
 {title:'From Toothache to Trigeminal Neuralgia: Impact of a Dental Referral Checkpoint', venue:'Research!Louisville poster', year:'2026'},
 {title:'Persistent Pain After Colorectal Surgery: Recovery, Treatment and Opioid Risk', venue:'Research!Louisville poster', year:'2026'},
 {title:'Stabilization Over Sedation: Vertebral Augmentation for Opioid Cessation', venue:'Kentucky Society of Anesthesiologists poster', year:'2026'},
 {title:'Salvage of an Infected Intrathecal Pump in Metastatic Cancer', venue:'ASIPP poster', year:'2026'},
 {title:'Navigating the Opioid Crisis', venue:'Global Health Leaders Conference, Johns Hopkins', year:'2024'}];
const PIPELINE = [
 {title:'C-SAEM: CPT-Stratified Anesthesia Economic Modeling Framework', venue:'Anesthesiology', year:'Submission', status:'Submitted'},
 {title:'Decision Consistency in Federal Independent Dispute Resolution', venue:'JAMA', year:'Submission', status:'In preparation'},
 {title:'Geographic Variation in Medicare Genicular Nerve Denervation', venue:'JAMA', year:'Submission', status:'In preparation'},
 {title:'Regional Anesthesia Recovery State Machine for cPNB Follow-Up', venue:'Corsaryn-linked model', year:'2026', status:'In development'},
 {title:'Industry Payments and Medicare Spinal Cord Stimulation Volume', venue:'Regional Anesthesia & Pain Medicine', year:'2026', status:'In development'},
 {title:'H-CASES: Certified Escalation on a $100 Edge Device', venue:'Research letter', year:'2026', status:'In progress'},
 {title:'Gut Microbiome–Autism Multi-Omics Study', venue:'Nature-level target', year:'2026', status:'In progress'},
 {title:'Rural Pain Access Geospatial Network', venue:'National analysis', year:'2026', status:'In development'}];

/* ===== site.ts ===== */
const NAV = [{id:'founders',label:'Founders'},{id:'story',label:'Our story'},{id:'corsaryn',label:'Corsaryn'},{id:'record',label:'Track record'}];
const RECORD_STATS = [
 {value:3,suffix:'',label:'Valedictorians',sub:'duPont Manual High School'},
 {value:3,suffix:'',label:'PubMed-indexed papers',sub:'Cureus and Brain Sciences'},
 {value:3,suffix:'',label:'PROSPERO protocols',sub:'Pre-registered reviews'},
 {value:20,suffix:'+',label:'Manuscripts in the pipeline',sub:'Across pain, policy and AI'}];
const TIMELINE = [
 {year:'Middle school', title:'It starts as a friendship', text:'Long before any titles, we were the kids who stayed late to build things together.'},
 {year:'2023', title:'First work on Corsaryn, first nonprofit', text:'Early work on Corsaryn begins. Andrei founds The Mango Care Foundation, with Rajaram and Manit alongside.'},
 {year:'2024 – 2025', title:'First joint publication', text:'Manit, Rajaram and Andrei publish a PubMed-indexed AI paper on hospital safety with Dr. Shuchita Garg.'},
 {year:'2025 – 2026', title:'Valedictorians, then researchers', text:'Andrei graduates early, Manit and Rajaram graduate as valedictorians, and all three join University of Louisville research labs.'},
 {year:'2026', title:'Corsaryn Recovery is founded', text:'Andrei formally founds the company in May. By October, the team presents posters together at Research!Louisville and submits to NSF SBIR/STTR.'}];
const TOGETHER = [
 {title:'Corsaryn Recovery', meta:'Company · 2023 – Present', text:'A clinician-connected recovery layer for the first days after outpatient anesthesia. All three of us have a role.', who:['andrei','rajaram','manit']},
 {title:'Generative-AI PPE compliance', meta:'Cureus 2025 · PMID 41280963', text:'Real-time monitoring of PPE and clinical tools. 95.8% accuracy across 168 trials; patent-pending.', who:['manit','rajaram','andrei'], href:'https://pubmed.ncbi.nlm.nih.gov/41280963/'},
 {title:'Prenylation research', meta:'Research!Louisville 2026', text:'PrenylFinder and a proteome-scale screen of two plant species, presented as posters with Dr. Mark Running.', who:['rajaram','manit','andrei']},
 {title:'Gut microbiome & autism', meta:'UofL · Dr. Naveen Nagarajan', text:'Cross-cohort reproducibility work, with a registered PROSPERO protocol and a family-disjoint validation pipeline.', who:['manit','rajaram','andrei'], href:'https://www.crd.york.ac.uk/PROSPERO/view/CRD420261470724'},
 {title:'The Mango Care Foundation', meta:'501(c)(3) · 2023 – Present', text:'Care packages for hospitalized children across Kentucky, Ohio, India and Vietnam: $10,000+ raised, 150+ gifts delivered.', who:['andrei','rajaram','manit'], href:'https://mangocare.org'},
 {title:'Frosthaven', meta:'E-commerce · 2026', text:'A cold plunge brand built from scratch. Supplier research, storefront and fulfillment, built end to end. Not Corsaryn revenue.', who:['manit','andrei']},
 {title:'Medical device concepts', meta:'Patent developing', text:'An anesthesia gas leak monitor, a needle-free iontophoresis system and an airway-stabilizing CPR collar.', who:['rajaram','andrei']},
 {title:'Fighting Medicare LCD L40260', meta:'Advocacy · 2025', text:'Patient stories gathered through Mango Care’s network and sent to the ASA for its CMS submissions.', who:['andrei','rajaram']}];
/** Ventures & service only. Research collaborations live in the publications list so nothing is shown twice. */
const VENTURES = TOGETHER.filter(c => ['The Mango Care Foundation','Frosthaven','Medical device concepts','Fighting Medicare LCD L40260'].includes(c.title));
const HONORS = [
 {title:'Top 5 Abstract Award', context:'American Society of Interventional Pain Physicians', who:'andrei', year:'2026'},
 {title:'Research Scholar', context:'Duke University, Division of Pain Medicine', who:'andrei', year:'2026'},
 {title:'Top abstract selection, oral presentation', context:'Research!Louisville', who:'andrei', year:'2026'},
 {title:'Abstract Award Winner', context:'Kentucky Society of Anesthesiologists', who:'andrei', year:'2026'},
 {title:'Editor’s Choice Article', context:'Brain Sciences', who:'andrei', year:'2025'},
 {title:'Featured by the ASA and reposted by its President', context:'Advocacy for physician-led anesthesia and patient safety', who:'andrei'},
 {title:'Dean’s Scholar, two colleges', context:'University of Louisville', who:'andrei', year:'2025–26'},
 {title:'Congressional App Challenge, 3rd place', context:'Louisville district · featured by WDRB News', who:'manit', year:'2025'},
 {title:'Broadcom MASTERS, national qualifier', context:'1st place at state', who:'manit'},
 {title:'TSA National Finalist', context:'Webmaster 6th · Debate 10th · State Champion, Webmaster', who:'manit'},
 {title:'Guaranteed Entrance to Medical School (GEMS)', context:'University of Louisville · 1 of 10 students statewide', who:'rajaram', year:'2026'},
 {title:'Governor’s School for Entrepreneurs', context:'Selected at a ~30% acceptance rate', who:'rajaram', year:'2025'},
 {title:'TSA Webmaster, 2nd at state and regional', context:'National qualifier · 15+ teams', who:'rajaram', year:'2025'},
 {title:'DECA Franchise Business Plan, national qualifier', context:'3rd at state (20+ teams)', who:'rajaram', year:'2024'},
 {title:'Henry Vogt Scholarship, $64,000', context:'University of Louisville · academic achievement, leadership, innovation', who:'andrei · rajaram · manit'},
 {title:'5-time Carnegie Hall soloist invitee', context:'Plus invitation to the Opéra Bastille and five international 1st places', who:'andrei'},
 {title:'Science Olympiad state 1st', context:'Disease Detectives and Bridge', who:'andrei'},
 {title:'2× Wyatt State Debate Champion', context:'3× Best Speaker · TOC Digital qualifier', who:'manit'},
 {title:'Personal Finance Challenge, 2nd statewide', context:'400 teams (Andrei) and 150+ teams (Rajaram)', who:'andrei · rajaram'},
 {title:'Taekwondo black belt, state champion', context:'International competitor', who:'manit'},
 {title:'Black belt instructor, school chess champion', context:'Mission Martial Arts · duPont Manual', who:'rajaram'}];
const CORSARYN_STATS = [
 {value:'49.6%', text:'rebound pain in one 972-patient nerve-block cohort', ref:1},
 {value:'42–71%', text:'of postoperative opioid tablets unused in a systematic review', ref:2},
 {value:'22.5%', text:'clinically relevant pain in a 330,008-patient outpatient cohort', ref:3}];
const CORSARYN_STEPS = [
 {t:'Enroll', d:'Procedure, nerve-block details and the clinician-prescribed medication plan.'},
 {t:'Guide', d:'Brief app or SMS check-ins across a roughly 3–5 day episode.'},
 {t:'Anticipate', d:'Block wear-off, pain, numbness, weakness, catheter concerns and opioid rescue.'},
 {t:'Escalate & close', d:'Prioritized clinician callbacks, generated notes and episode closure.'}];
const CORSARYN_STATUS = [
 'Clinician-controlled protocols only. No autonomous diagnosis, prescribing or pump control.',
 'NSF SBIR/STTR pitch submitted (not an award).',
 'Duke Transitional Pain Service has expressed conditional interest in evaluation, pending safeguards and approvals.',
 'Efficacy and customer ROI await prospective pilots.'];
