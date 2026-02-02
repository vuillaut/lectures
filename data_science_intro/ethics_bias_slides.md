---
theme: seriph
background: https://unsplash.com/photos/eFbxYl9M_lc/download?force=true&w=1920
title: Data Biases & Ethics
info: |
    ## Data Biases & Ethics
    ## Thomas Vuillaume
class: text-center
drawings:
    persist: false
transition: slide-left
mdc: true
duration: 90min
layout: cover
download: true
aspectRatio: 16/9
name: ethics
---

# Data Biases & Ethics

## Why data-driven systems can be unfair

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover:bg="white op-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

<!--
- Set the tone: data ≠ neutral.
- Ethics is not philosophy here, it’s engineering discipline.
- This lecture focuses on practical intuition, not legal jargon.
-->

---

# Why This Matters

<v-clicks depth=1> 

- Algorithms influence:
  - hiring
  - healthcare
  - credit
  - justice


- A human bias affects dozens; an algorithm affects millions. It's a **systemic risk**.


- > ~~the model is objective because it’s mathematical~~

</v-clicks> 


---

# What Is Bias (Simple Definition)

**Bias** 

1. (statistics) a systematic distortion of a statistical result due to a factor not allowed for in its derivation.
> something we have not accounted for that will shift the distribution <br>


2. systematic error that unfairly favors or disadvantages groups

<br>

<v-click>

- Bias is not noise.
- Bias is not a bug you fix once.
- Bias is structural - embedded in data and processes.

</v-click>


---

# Where Bias Comes From

**Bias is introduced at multiple stages of a data pipeline:**

<v-clicks>

- **Sampling bias = data collection**: Who is included (or excluded) in the dataset
> Example: Misdiagnosis when genetic variants common outside European ancestry are treated as rare because data lacks diversity [(source: lemonde.fr)](https://www.lemonde.fr/sciences/article/2025/04/21/comment-la-surrepresentation-des-adn-d-origine-europeenne-dans-les-bases-de-donnees-biaise-la-recherche-en-genomique-humaine_6598614_1650684.html) 

- **Historical bias**: Past human decisions encoded in data
> Example: Investigation: St. George’s Medical School (1988) <br>
> A computer screening system disproportionately filtered out women and people with non-European-sounding names from interview selection. [(source: wikipedia)](https://en.wikipedia.org/wiki/Medical_School_Admissions%3A_Report_of_a_formal_investigation_into_St._George%27s_Hospital_Medical_School_%281988%29)


- **Measurement Bias**: How concepts are measured or annotated
> Example: human annotators imposing their views when tagging data (image or sentiment labeling reflect cultural norms) [(source: cacm)](https://cacm.acm.org/practice/biases-in-ai-systems/)

- **Modeling choices**: What the model is optimized for
> Example: credit scoring optimized only for default risk, ignoring fairness, exclude minorities or low-income populations [(source: accessible law)](https://www.accessiblelaw.untdallas.edu/post/when-algorithms-judge-your-credit-understanding-ai-bias-in-lending-decisions)


</v-clicks>
<!--
* Bias is rarely intentional.
* It comes from convenience, legacy systems, and blind spots.
* Data is not “given”; it is *produced*.
-->

---


# Why Bias Is Dangerous


Bias in data-driven systems leads to:

- Unequal treatment: Different outcomes for similar individuals

- Loss of trust: Users stop trusting systems perceived as unfair

- Legal risk: Violations of GDPR, anti-discrimination laws, AI Act

- Scientific invalidity: Biased data → wrong conclusions and poor generalization

<!--
* Bias is not just an ethical issue; it is a *system failure*.
* A biased system cannot be trusted
* In science, bias invalidates results. In society, it harms people.
* Regulation exists because relying on goodwill alone does not work.
-->

---

# Ethics ≠ Morals

**Ethics in data = constraints on power**

Data-driven systems give power to those who design and deploy them.
Ethics defines what this power is allowed to do.

**Core principles:**

<v-clicks>

- Fairness – avoid systematic discrimination between groups
> Similar individuals → similar outcomes. Groups should not be systematically disadvantaged

- Transparency – make decisions understandable and traceable
> Users should understand what data is used for and why a decision happened

- Accountability – humans remain responsible for outcomes
> “The algorithm decided” is not acceptable

- Privacy – limit how personal data is collected and used
> Personal data = power over individuals. Minimize, protect, justify usage.

</v-clicks>

<!--
- Morals are personal values; ethics are collective rules.
- It’s setting boundaries on what systems may do = safety rules
- Europe treats ethics as regulatory, not optional.
-->



---

# GDPR (Europe)

**Key principles**

- Lawful basis – Personal data must have a legal reason to be processed

- Purpose limitation – Data collected for one purpose cannot be reused arbitrarily

- Data minimization – Collect only what is necessary

- Transparency – Users must know what data is collected and why

<!--
- GDPR applies even if “it’s just training data”.
- Anonymization is hard; pseudonymization is not enough.
- GDPR violations are often data science failures.
-->

---

# GDPR & Automated Decisions


**Key Rights under GDPR**

* **Right to explanation** – Individuals can ask why a decision was made
* **Right to contest** – Individuals can challenge automated decisions affecting them
* **Restrictions on fully automated decisions** – High-impact decisions often require human review

<!-- 
* GDPR limits the use of AI where decisions significantly affect people (e.g., hiring, loans).
* “Black-box” automated decisions are not fully legal if they harm individuals.
* Human oversight is mandatory for high-risk cases; this enforces accountability.
* Emphasize: it’s not about forbidding automation—it’s about **responsible automation**.
-->

---

# EU AI Act (High-Level)

* **Risk-based regulation** – AI systems classified by risk level
* **High-risk systems require:**

  * **Bias mitigation** – measures to reduce discriminatory outcomes
  * **Documentation** – transparency and traceability of system design
  * **Human oversight** – humans remain responsible for outcomes

<!--  
Speaker notes:
- The AI Act regulates AI based on the potential impact on people.  
- High-risk systems include recruitment, healthcare, credit scoring, and law enforcement.  
- Organizations must implement processes to detect bias, document decisions, and ensure humans can intervene.  
- This emphasizes that compliance is not optional in Europe for high-risk AI.  
-->

---

# High-Risk AI Examples

* **Recruitment** – hiring and candidate screening
* **Credit scoring** – loan approvals and financial risk assessment
* **Education** – student evaluation and adaptive learning systems
* **Healthcare** – diagnostics, treatment recommendations
* **Law enforcement** – predictive policing, risk assessment tools

<!--  
Speaker notes:
- These domains have a direct impact on people’s lives and rights.  
- High-risk classification triggers stricter obligations under the EU AI Act.  
- Emphasize that even if a model is accurate, it must meet fairness, transparency, and oversight requirements in these areas.  
-->

---

# Measuring & Mitigating Bias 

Intuition

* **Compare outcomes across groups** – check if some groups are favored or disadvantaged
* **Compare error rates** – ensure similar accuracy and mistakes across demographics
* **Look for systematic gaps** – identify patterns of unequal treatment

<!--  
Speaker notes:
- Bias can be quantified even if the model seems accurate overall.  
- Use metrics like disparate impact, equalized odds, or demographic parity.  
- Always check multiple groups and multiple metrics to uncover hidden bias.  
-->

# 
Mitigation Strategies

* **Before training** – improve dataset representativeness, remove proxy biases
* **During training** – apply fairness-aware algorithms or constraints
* **After training** – adjust outputs to reduce disparate impacts

<!--
- There is no single solution; mitigation must be applied throughout the pipeline.  
- Fixing bias after deployment is costly and often incomplete.  
- Early intervention (pre-processing and design choices) is the most effective.  
-->


---

# Weak Ideas to Reject

- “The data is objective”
- “We removed gender, so it’s fair”
- “Accuracy proves fairness”

<!--
- These arguments fail under scrutiny.
- Ethics requires adversarial thinking.
- Always ask: who loses?
-->

---

# Practical Checklist

Before deploying:

✔︎ Is data representative? 

✔︎ Are sensitive groups impacted?

✔︎ Is there a legal basis? 

✔︎ Can decisions be explained?

✔︎ Is there human oversight? 

<!--
- Ethics is a process, not a checkbox.
- This checklist catches most beginner mistakes.
- Missing any item is a warning sign.
-->

---

# Ethics Is a Design Choice

* **Data choices** – what to collect, include, or exclude
* **Modeling choices** – objectives, constraints, and evaluation metrics
* **Deployment choices** – how, where, and by whom the system is used

<!--
- Ethical considerations must be integrated from the start of the project.  
- Retrofitting ethics after the model is built is often ineffective.  
- Designing with ethics in mind ensures fairness, accountability, and trust by default.  
-->
<br>

<v-click>

# Key Takeaways

- Bias is structural, not accidental
- Ethics is part of engineering
- Europe enforces ethical constraints
- Responsible AI is better AI

</v-click>

<!--
- Ethics improves robustness and trust.
- This is not slowing innovation; it stabilizes it.
-->

---

# Discussion

- Where could bias appear in your field?
- In your everyday life?
- What data or systems do you trust too easily?

<!--
- Encourage concrete examples.
- Beginners often discover bias in their own assumptions.
- End on reflection, not rules.


### **1. Social Media Feeds**

* Example: Instagram/TikTok feed shows content reinforcing stereotypes (gender, culture, political views).
* Lead: *“How does your own interaction feed the algorithm? Are you seeing only content it thinks you want?”*

### **2. Search Engines**

* Example: Google image search suggesting stereotyped results for certain queries (e.g., “CEO,” “nurse”).
* Lead: *“How do your searches shape what others see? Could the algorithm be biased by what most users click?”*

### **3. Personalized Ads**

* Example: Ads show jobs, loans, or housing differently based on your profile.
* Lead: *“Have you ever seen ads that didn’t feel relevant, or that reinforced assumptions about you? Why?”*

### **4. Voice Assistants & Smart Devices**

* Example: Alexa, Siri, or Google Home trained mostly on certain accents or languages.
* Lead: *“How might these assistants fail or misinterpret you if you speak differently? Whose voices are ‘invisible’?”*

### **5. Location & Mobility Data**

* Example: Maps and traffic suggestions optimized for high-income neighborhoods.
* Lead: *“How does giving location data every day affect what services are offered where you live or travel?”*

### **6. Health & Fitness Apps**

* Example: Activity trackers or diet apps trained mostly on certain populations.
* Lead: *“Could your app give misleading advice because of how others’ data was collected?”*

### **7. Streaming Services**

* Example: Netflix or Spotify recommendations reinforce cultural or linguistic exposure.
* Lead: *“Do these algorithms limit your exposure to new ideas or artists? How does your usage reinforce the filter?”*


-->
