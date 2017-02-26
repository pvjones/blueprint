

module.exports = {
  tests: [
    {
      id: 1,
      genosetName: 'isFemale',
      genosetDesc: 'Female',
      genosetLongDesc: '',
      resultType: 'Traits',
      resultName: 'Gender',
      resultDescTrue: 'Female',
      resultDescFalse: 'Male'
    }, 
    {
      id: 2,
      genosetName: 'isMale',
      genosetDesc: 'Male',
      genosetLongDesc: '',
      resultType: 'Traits',
      resultName: 'Gender',
      resultDescTrue: 'Male',
      resultDescFalse: 'Female'
    }, 
    {
      id: 3,
      genosetName: 'gs228',
      genosetDesc: 'likely affected by Sickle Cell Anemia',
      genosetLongDesc: '',
      resultType: 'Inherited Conditions',
      resultName: 'Sickle Cell Anemia',
      resultDescTrue: 'Variant Present',
      resultDescFalse: 'Variant Absent'
    }, 
    {
      id: 4,
      genosetName: 'gs291',
      genosetDesc: 'likely lower than average risk of heart attack',
      genosetLongDesc: '',
      resultType: 'Health Risks',
      resultName: 'Heart attack',
      resultDescTrue: 'Likely Lower',
      resultDescFalse: 'Average'
    }, 
    {
      id: 5,
      genosetName: 'gs117',
      genosetDesc: 'likely affected by Type 1 Diabetes',
      genosetLongDesc: '',
      resultType: 'Inherited Conditions',
      resultName: 'Type 1 Diabetes',
      resultDescTrue: 'Variant Present',
      resultDescFalse: 'Variant Absent'
    }, 
    {
      id: 6,
      genosetName: 'gs101',
      genosetDesc: 'likely to experience lactose intolerance',
      genosetLongDesc: '',
      resultType: 'Traits',
      resultName: 'Lactose Intolerance',
      resultDescTrue: 'Likely Intolerant',
      resultDescFalse: 'Likely Tolerant'
    }, 
    // {
    //   id: 7,
    //   genosetName: 'gs122',
    //   genosetDesc: 'up to 7x increased likelihood of male pattern baldness',
    //   genosetLongDesc: '',
    //   resultType: 'Traits',
    //   resultName: 'Male Pattern Baldness',
    //   resultDescTrue: '7x More Likely',
    //   resultDescFalse: 'Average'
    // }, 
    {
      id: 8,
      genosetName: 'gs137',
      genosetDesc: 'slightly increased likelihood for thyroid cancer',
      genosetLongDesc: '',
      resultType: 'Health Risks',
      resultName: 'Thyroid Cancer',
      resultDescTrue: 'Slightly More Likely',
      resultDescFalse: 'Average'
    }, 
    {
      id: 9,
      genosetName: 'gs191',
      genosetDesc: 'likely difficulty metabolizing NSAIDs',
      genosetLongDesc: '',
      resultType: 'Drug Response',
      resultName: 'NSAID Sensitivity',
      resultDescTrue: 'Likely Higher Sensitivity',
      resultDescFalse: 'Likely Average Sensitivity'
    }, 
    {
      id: 10,
      genosetName: 'gs243',
      genosetDesc: 'up to 50% increased risk of mortality in the event of prostate cancer',
      genosetLongDesc: '',
      resultType: 'Health Risks',
      resultName: 'Prostate Cancer',
      resultDescTrue: 'Higher Risk',
      resultDescFalse: 'Average'
    }, 
    {
      id: 11,
      genosetName: 'gs211',
      genosetDesc: 'likely reduced rate of ethanol metabolization',
      genosetLongDesc: '',
      resultType: 'Drug Response',
      resultName: 'Alcohol Sensitivity',
      resultDescTrue: 'Likely Higher Sensitivity',
      resultDescFalse: 'Likely Average Sensitivity'
    }, 
    {
      id: 12,
      genosetName: 'gs209',
      genosetDesc: 'up to 1.7x increased likelihood of anxiety disorder',
      genosetLongDesc: '',
      resultType: 'Health Risks',
      resultName: 'Anxiety Disorder',
      resultDescTrue: '1.7x More Likely',
      resultDescFalse: 'Average'
    }, 
    {
      id: 13,
      genosetName: 'gs249',
      genosetDesc: 'likely increased risk of developing Parkinsons Disease',
      genosetLongDesc: '',
      resultType: 'Health Risks',
      resultName: 'Parkinson\'s Disease,',
      resultDescTrue: 'Slightly More Likely',
      resultDescFalse: 'Average'
    }, 
    {
      id: 14,
      genosetName: 'gs248',
      genosetDesc: 'likely decreased risk of developing Parkinsons Disease',
      genosetLongDesc: '',
      resultType: 'Health Risks',
      resultName: 'Parkinson\'s Disease,',
      resultDescTrue: 'Slightly Less Likely',
      resultDescFalse: 'Average'
    }, 
    {
      id: 15,
      genosetName: 'gs116',
      genosetDesc: '80% unlikely to possess bitter-tasting ability',
      genosetLongDesc: '',
      resultType: 'Traits',
      resultName: 'Bitter Taste Perception',
      resultDescTrue: 'Likely Cannot Taste',
      resultDescFalse: 'Can Taste'
    }, 
    {
      id: 16,
      genosetName: 'gs123',
      genosetDesc: '2.7x increased risk for basal skin cell carcinoma',
      genosetLongDesc: '',
      resultType: 'Health Risks',
      resultName: 'Basal Cell Carcinoma',
      resultDescTrue: '2.7x More Likely',
      resultDescFalse: 'Average'
    }, 
    {
      id: 17,
      genosetName: 'gs216',
      genosetDesc: '11x more likely to develop Alzheimers, increased risk (5-10%) of high cholesterol and 40-50% increased risk of cardiovascular disease. 40% less likely to contract Hepatitis C',
      genosetLongDesc: '',
      resultType: 'Health Risks',
      resultName: 'Alzheimer\'s Disease',
      resultDescTrue: '11x More Likely',
      resultDescFalse: 'Average'
    }, 
    {
      id: 18,
      genosetName: 'gs216',
      genosetDesc: '11x more likely to develop Alzheimers, increased risk (5-10%) of high cholesterol and 40-50% increased risk of cardiovascular disease. 40% less likely to contract Hepatitis C',
      genosetLongDesc: '',
      resultType: 'Health Risks',
      resultName: 'Cardiovascular Disease',
      resultDescTrue: '50% More Likely',
      resultDescFalse: 'Average'
    }, 
    {
      id: 19,
      genosetName: 'gs119',
      genosetDesc: 'up to 6.5x increased risk for developing breast cancer',
      genosetLongDesc: '',
      resultType: 'Health Risks',
      resultName: 'Breast Cancer',
      resultDescTrue: '6.5x More Likely',
      resultDescFalse: 'Average'
    }, 
    {
      id: 20,
      genosetName: 'gs159',
      genosetDesc: 'likely fast caffeine metabolizer',
      genosetLongDesc: '',
      resultType: 'Drug Response',
      resultName: 'Caffeine',
      resultDescTrue: 'Likely Lower Sensitivity',
      resultDescFalse: 'Average'
    }, 
    {
      id: 21,
      genosetName: 'gs293',
      genosetDesc: 'likely increased risk of late-onset Alzheimers Disease',
      genosetLongDesc: '',
      resultType: 'Health Risks',
      resultName: 'Late-onset Alzheimer\'s Disease',
      resultDescTrue: 'Slightly More Likely',
      resultDescFalse: 'Average'
    }, 
    {
      id: 22,
      genosetName: 'gs221',
      genosetDesc: 'slightly increased risk for autoimmune disorders including Celiac Disease',
      genosetLongDesc: '',
      resultType: 'Health Risks',
      resultName: 'Autoimmune Disorder',
      resultDescTrue: 'Slightly More Likely',
      resultDescFalse: 'Average'
    }, 
    {
      id: 23,
      genosetName: 'gs126',
      genosetDesc: 'likely poor metabolizer of Warfarin',
      genosetLongDesc: '',
      resultType: 'Drug Response',
      resultName: 'Warfarin',
      resultDescTrue: 'Likely Higher Sensitivity',
      resultDescFalse: 'Average'
    }, 
    {
      id: 24,
      genosetName: 'gs102',
      genosetDesc: '1.3x increased risk for ALS',
      genosetLongDesc: '',
      resultType: 'Health Risks',
      resultName: 'ALS',
      resultDescTrue: '1.3x More Likely',
      resultDescFalse: 'Average'
    }, 
    {
      id: 25,
      genosetName: 'rs12333032T',
      genosetDesc: 'increased risk for developing cocaine-induced paranoia',
      genosetLongDesc: '',
      resultType: 'Drug Response',
      resultName: 'Cocaine-induced Paranoia',
      resultDescTrue: 'More Likely to Develop',
      resultDescFalse: 'Average'
    }, 
    {
      id: 26,
      genosetName: 'rs5400TT',
      genosetDesc: 'possible decreased sensitivity to glucose consumption',
      genosetLongDesc: '',
      resultType: 'Traits',
      resultName: 'Glucose Appetite Response',
      resultDescTrue: 'Likely Less Sensitive',
      resultDescFalse: 'Average'
    }, 
    {
      id: 27,
      genosetName: 'rs11362AG',
      genosetDesc: '2.4x increased risk of colonic Crohn\'s Disease',
      genosetLongDesc: '',
      resultType: 'Health Risks',
      resultName: 'Colonic Crohn\'s Disease',
      resultDescTrue: '2.4x More Likely',
      resultDescFalse: 'Average'
    }, 
    {
      id: 28,
      genosetName: 'gs128',
      genosetDesc: 'likely Type O blood',
      genosetLongDesc: '',
      resultType: 'Traits',
      resultName: 'Blood Type',
      resultDescTrue: 'Likely Type O',
      resultDescFalse: 'Likely Type A or B'
    }, 
    {
      id: 29,
      genosetName: 'rs1815739TT',
      genosetDesc: 'Likely reduced development of fast-twitch muscle fibers. Likely better endurance-based athletic performance.',
      genosetLongDesc: '',
      resultType: 'Traits',
      resultName: 'Endurance Muscle Performance',
      resultDescTrue: 'Endurance Biased',
      resultDescFalse: 'Likely Average'
    },   
    {
      id: 30,
      genosetName: 'rs1815739CC',
      genosetDesc: 'likely better development of fast-twitch muscle fibers. Likely better sprint-based athletic performance.',
      genosetLongDesc: '',
      resultType: 'Traits',
      resultName: 'Sprint Muscle Performance',
      resultDescTrue: 'Sprint Biased',
      resultDescFalse: 'Average'
    }, 
    {
      id: 31,
      genosetName: 'rs9939609AA',
      genosetDesc: 'likely increased risk of obesity. 1.6x increased risk of developing Type 2 Diabetes',
      genosetLongDesc: '',
      resultType: 'Health Risks',
      resultName: 'Type 2 Diabetes',
      resultDescTrue: '1.6x More Likely',
      resultDescFalse: 'Average'
    }, 
    {
      id: 32,
      genosetName: 'rs9939609AT',
      genosetDesc: 'slightly increased risk of obesity. 1.3x increased risk of developing Type 2 Diabetes.',
      genosetLongDesc: '',
      resultType: 'Health Risks',
      resultName: 'Type 2 Diabetes',
      resultDescTrue: '1.3x More Likely',
      resultDescFalse: 'Average'
    }
  ]
};



