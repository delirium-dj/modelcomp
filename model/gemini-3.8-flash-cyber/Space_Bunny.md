# Gemini 3.8 Flash Cyber — findings by Space Bunny

- Source: Google DeepMind (`gemini-3.8-flash-cyber`; distributed only via the Fairwind Program)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Third-pass note. The inheritance problem that structured the 2026-10-01 file has been
> solved by other people's work, and the score moves 84 → 88.**
> That file's central caveat was that "four of the five quality dimensions below are
> scored **partly on Gemini 3.8 Flash's published base-model numbers**" and that it
> would "re-score… when any **Cyber-specific** general-purpose benchmark is published."
> No Cyber-specific benchmark has appeared. What *has* appeared is **89 measured results
> on 46 benchmarks for the base model, 28 of them independently verified, tracked to
> 2026-10-13** — including **GPQA Diamond 95.2%, ARC-AGI-2 89.17%, CritPt 18.2%,
> FrontierMath Tier 4 21.95%, AA-LCR 81.3%, SciCode 56.60%, τ³-Bench V3 Banking 44.95%
> and MMMU-Pro 85.61%**, every one of which is a row the previous file recorded as
> "no verified public score found." The inherited baseline is now measured rather than
> asserted, and four of five dimensions moved up as a result.

> **Access status changed and is unresolved.** Google's DeepMind cyber page
> (`deepmind.google/models/gemini/cyber/`), fetched 2026-10-13, **no longer describes
> this model.** It now serves **"Gemini 4 Argon with cybersecurity defense
> capabilities"** — Argon was unveiled 2026-09-30 and its own launch sequence was "first
> to trusted cyber defenders through Google's Fairwind Program, then to paid API
> customers and AI Ultra subscribers." The page keeps the same three performance rows
> (CWE-bench v1, Gray Swan IPI) with **no numbers rendered**, and adds a capability the
> 3.8 Flash Cyber page did not list: **black-box penetration testing with no access to
> application source code**. **I am not asserting that Gemini 3.8 Flash Cyber has been
> retired** — Vector Wire still carries it in its model index, and Google has published no
> deprecation notice for it. What is certain is that **Google's Fairwind cyber
> showcase now points at a different model**, and that is recorded here as a live
> question rather than resolved in either direction.

## Model card

- **Name:** Gemini 3.8 Flash Cyber
- **Short description:** Google's most capable **cybersecurity-specialised** model, released **2026-09-02** alongside Gemini 3.8 Flash — the third Flash release in six weeks, and the second in Google's Cyber lineage after Gemini 3.5 Flash Cyber (July). It is **explicitly defender-oriented**: "the model is designed specifically for defenders," with "more permissive cyber mitigations than the standard model," which is precisely why it is gated rather than shipped as a public API. Its stated capabilities are **frontier-level autonomous vulnerability discovery** across codebases spanning **20 programming languages**, and **automated patching**. Distinct variant with its own access regime, not an alias of `gemini-3.8-flash`.
- **Provider / access:** **Restricted — not general release.** Available only to a set of **trusted defenders via Google's Fairwind Program**, opened at the same time as the models to **trusted government authorities, critical-infrastructure operators, and software maintainers specifically**, by application. Predecessor Gemini 3.5 Flash Cyber went out through the CodeMender agent to governments and partners; the access mechanism changed, which is the substantive governance difference between the two Cyber models. **Status caveat above: Google's own cyber landing page now presents Gemini 4 Argon instead.**
- **Release / knowledge:** released **2026-09-02**. Knowledge cutoff not separately published for the Cyber variant.
- **IDs:** `gemini-3.8-flash-cyber`. Base model for capability inheritance: `gemini-3.8-flash`, which Vector Wire lists at four reasoning settings — `gemini-3-8-flash-low`, `-medium`, `-high`, and the plain ID.
- **Context window:** **1,000,000 tokens, 64,000 max output** (Google AI developer docs, stated for Gemini 3.8 Flash). Tunable thinking levels `low` / `medium` / `high`, default `medium` — and the new independent data is reported per level, which is why most rows below carry a High/Medium/Low triple.
- **Modalities:** **text, images, audio and video in; text out** (Google DeepMind model card for 3.8 Flash). Base-model vision is measured and strong — **CharXiv Reasoning 86.2%**, **MMMU-Pro 85.61%**, **LMArena Vision Elo 1314.08 (Verified)**, **LVBench long-video 87.8% agentic / 87.1% static**, **GDP.PDF 35.0% all-pass**. No Cyber-specific modality restriction was published.
- **Pricing (as of 2026-10-13):** **$0.75 / MTok input, $3.75 / MTok output** (output includes thinking tokens) — the **introductory rate**, and **confirmed unchanged on 2026-10-13 across all three tracked providers** (Google AI Studio, Google via ai.google.dev, and OpenRouter, all listing identical $0.75 / $3.75). Only to Fairwind Program participants. **The introductory price expires 2026-12-31; from 2027-01-01 the rate is $1.50 / $7.50.**
  > **A counterweight to the "cheapest" framing, new this pass.** Google and Wiz both
  > position the rate as **2.3–5.2× cheaper per token than leading frontier models**,
  > which is true and is a frontier-relative claim. Measured against the whole priced
  > field it is a different statement: Vector Wire, on 2026-10-13, records that at a 3:1
  > input-to-output blend this model **"costs more than 66% of 328 priced models."**
  > Both readings are correct and they are not interchangeable — cheap against
  > Opus/Sonnet-class, above median against the field.
- **Architecture:** proprietary MoE-family transformer. Not separately specified for the Cyber variant; it shares 3.8 Flash's foundations.
- **Safety:** both 3.8 models ship with **CBRN and cyber-offense misuse safeguards under Google's Frontier Safety Framework**; the Cyber variant runs a deliberately more permissive mitigation set, which is the reason for the Fairwind gate.

### Raw benchmarks found

**Cyber-variant-specific, published:**

- **CWE-Bench pass@1: 47.2%** — run by **Collinear**, an external benchmark for vulnerability patching. Against a leading frontier model at **47.8%**: a gap of **0.6 percentage points**, at 2.3–5.2× lower cost. Google frames this as sitting on the Pareto frontier, and the framing is defensible on the numbers.
- **Internal 20-programming-language vulnerability-discovery benchmark: success rate >70%** — Google's own benchmark, built because "real-world defensive work is not limited to just C/C++ codebases." Google calls it "an impressive leap" over previous models. Samir Sengupta's fair criticism stands unchanged: the announcement does not say **which** 20 languages, whether performance is uniform across them, or how it compares to 3.5 Flash Cyber numerically.
- **CyberGym: 86.2% pass@1** (LLM Stats, sourced to Google's scorecard). Google's own announcement makes only a **qualitative** claim — that it "surpasses both 3.5 Flash Cyber as well as significantly larger frontier models" — with no number printed.
- **Internal real-world benchmark recall: 71.0%** (LLM Stats).
- **Gray Swan prompt-injection robustness: "a significant leap"** — **no score quoted**.
- **No Cyber-specific number has been added since 2026-09-02.** Every gap flagged in the previous version of this file is still open.

**Real-world deployment results, named teams rather than charts:**

- **Chrome Security team: 2.6× more correct patches** to Chrome vulnerabilities than "the best commercial models that are much larger."
- **Wiz: +7.5–9.7% higher recall** on their internal penetration-testing benchmark at **2.3–5.2× lower cost** than leading frontier models.
- **Google Cloud Vulnerability Research team: found a critical foundational vulnerability in under 2 hours**, where comparable research "usually takes months."
- Laura Martel's fair characterisation: "These are still vendor-selected examples rather than independent audits, but they're at least attached to named teams and concrete multipliers rather than a chart alone."

**Inherited from the Gemini 3.8 Flash base — Google's statement that the two "share the same underlying model" still governs, but the evidence below is now measured rather than asserted. 89 results on 46 benchmarks, 28 independently verified, 48 aggregator-attributed, 13 vendor-reported, from 17 sources; latest 2026-10-13.** Reasoning and knowledge:

- **GPQA Diamond: 95.2%** at high effort (Aggregator, High confidence, 2026-10-12); 93.54% medium; 92.02% low. *No GPQA figure existed for either model in the previous version of this file.*
- **CritPt: 18.2%** high; 12.29% medium; 4.00% low. *Also previously absent.*
- **ARC-AGI-2: 89.17%** (Verified, arcprize.org, 2026-09-25); ARC-AGI-1 **90.50%** (Verified). *Previously absent.*
- **FrontierMath Tier 4: 21.95%**; **FrontierMath Tiers 1–3: 68.42%** (both Verified, Epoch AI, 2026-09-21). *Previously absent.*
- **Humanity's Last Exam: 47.82%** high; 42.12% medium; 37.07% low. **SimpleQA Verified: 69.70%** (Epoch, 2026-09-21). **SimpleBench 82.40%** (Verified). **LiveBench Reasoning 89.29%** (Verified) and **LiveBench Mathematics 91.56%** (Verified).
- **Artificial Analysis Intelligence Index: 41.00** (Verified, High confidence, 2026-09-21); 40.93% medium, 33.45% low. AA Coding Index **76.29** high / 74.06 medium / 73.52 low. AA Agentic Index **41.10** high / 40.47 / 33.73.
- **AA-Omniscience: 29.55** index high (28.58 medium, 21.35 low); Accuracy 54.60% high; Non-Hallucination 44.82% high.
- Previously inherited and unchanged: **HLE-Verified 54.9%** (vendor), **BioMysteryBench 88.8% human-solvable / 56.5% human-difficult**, **LABBench2 86.2%**, **Harvey's Legal Agent Benchmark 10.0% all-pass** where Google leads a field sitting in single digits, **Vals Finance Agent v2 61.4%** where Google also leads. DataCamp's caveat that HLE moved little generation-over-generation still stands.

Agent / tool use — **three previously-absent rows now measured:**

- **τ³-Bench V3 Banking: 44.95%** high; 45.77% medium; 33.20% low. *The previous version recorded "no Tau3-Banking figure."*
- **AA IT-Bench SRE: 52.54%** — Kubernetes incident root-cause analysis. New.
- **Terminal-bench 2.1: 87.64%** high (Aggregator, High confidence); 89.40% vendor. **Terminal-bench 4.0: 19.70%** high/medium; 10.10% low — confirmed and still the model's defining weakness.
- **GDPval win rate: 46.78%** high; **GDPval-AA v2 Elo 1545.00** (vendor, `storage.googleapis.com/gemini_3-8_flash_model_evaluation`, 2026-09-02).
- **OSWorld 2.0: 59.0%** partial score. **Arena ELO 1495** (Verified, lmarena.ai, 2026-10-13) — new.
- HiL-Bench **41.47%** (Verified, labs.scale.com).

Coding — **SciCode fills a gap the previous file flagged:**

- **SciCode: 56.60%** high; 55.09% medium; 54.98% low. *Previously recorded as absent.*
- **DeepSWE v1.1: 73.70%** (vendor).
- **Terminal-bench 2.1 87.64%** corroborates. **LMArena WebDev Elo 1583.46** (Verified, 2026-09-21) — new. **LiveBench Coding 72.49%** and **LiveBench Agentic Coding 54.24%** (both Verified) — new.
- **Vector Wire's capability verdict on the base model is worth recording against these:** Coding is rated **"Limited — 29.1% behind the leader" across 5 of 10 ranked benchmarks**, and Math **"Limited — 41.3% behind the leader" across 5 of 5.** Factuality and Reasoning are the base model's two "Strong" categories, Long Context third. A model that leads on reasoning and is limited on coding is precisely the profile the Cyber variant inherits, and it is why the Terminal-Bench 4.0 gap matters so much.
- Still **no SWE-bench Verified, LiveCodeBench or Aider Polyglot** figure for either the Cyber variant or the base.

Long context — **the gap that cost this dimension eight points:**

- **AA-LCR: 81.3%** high; 84.00% medium; 80.67% low. *The previous version of this file scored Context window explicitly on the reasoning that "**no retrieval measurement exists at any length** — no MRCR, no RULER, no GraphWalks." That premise is now false.*
- **LVBench 87.8% agentic / 87.1% static** on long-video understanding (vendor) — strong, and about video rather than text retrieval.

Vision:

- **MMMU-Pro: 85.61%** high; 84.51% / 84.22% lower. **LMArena Vision Elo 1314.08** (Verified, 2026-09-29). **CharXiv Reasoning 86.2%** (vendor). **GDP.PDF 35.0%** all-pass (vendor, confirmed twice).
- Still **no MMMU, MMMU-Pro-independent or DocVQA figure from a Cyber-specific run**, and none is likely to appear while access is gated.

### Normalized scores (1–100)

> **Inheritance caveat, restated in its new form.** The previous version warned that four
> of five dimensions rested on Google's shared-foundation statement "rather than on
> measurements of this variant." That is still literally true — **no Cyber-specific
> general-purpose benchmark exists and none can be produced, because the model is gated.**
> What has changed is the weight the caveat can carry: the base model now has **28
> independently verified measurements** rather than a vendor comparison table, so the
> inherited figures are real measurements of the same underlying weights, published by
> eight independent sites, not a marketing claim. Cyber tuning is very unlikely to have
> reduced general capability. Every affected line below names what is inherited.

- **Tool use: 85/100.** *Revised up from 84.* Cyber-specific evidence is unchanged and still the strongest part of the record: **CWE-Bench 47.2% pass@1** on an externally-run patching benchmark within 0.6 points of a leading frontier model, and **>70% on the internal 20-language discovery benchmark** — patching is the harder half and it is the half measured closest to the frontier. The inherited side is now much better populated than in the previous version: **τ³-Bench V3 Banking 44.95%** fills a gap the file explicitly flagged, **AA IT-Bench SRE 52.54%** is new, **Terminal-bench 2.1 87.64%** is now independently measured rather than vendor-only, and the **AA Agentic Index of 41.10** is on record. Still capped by **Terminal-bench 4.0 at 19.70%** — confirmed again on independent data, and Vector Wire rates the base model's whole Agentic capability "Capable, 19.7% behind the leader" — and by **GDPval-AA Elo 1545 against Opus 5's 1824**, which says strong specialist rather than strong generalist.
- **Reasoning: 88/100.** *Revised up from 88's predecessor of 78 — the largest single move in this file, and it is entirely inherited evidence arriving.* The previous version capped this dimension on **"no GPQA Diamond, CritPt, FrontierMath or ARC-AGI figure existing for either model."** All four now exist and all four are strong: **GPQA Diamond 95.2%**, **CritPt 18.2%**, **ARC-AGI-2 89.17%** and **ARC-AGI-1 90.50%** (both Verified), **FrontierMath Tier 4 21.95%** with Tiers 1–3 at 68.42%, **SimpleQA 69.70%** (Verified), **SimpleBench 82.40%**, **LiveBench Reasoning 89.29%** and **Mathematics 91.56%**. Alongside the inherited-but-older **HLE-Verified 54.9%, BioMysteryBench 56.5% human-difficult, LABBench2 86.2%, Vals Finance Agent v2 61.4%** and **Harvey's Legal 10.0% all-pass**, and **AA Intelligence Index 41.00 (Verified)** — a frontier-adjacent reasoning profile. Held at 88 rather than higher because the **AA Intelligence Index of 41 is itself mid-field against a 65.7 leader**, and because **AA-Omniscience at 29.55 with 44.82% non-hallucination** says the knowledge-reliability side is materially weaker than the academic-reasoning side.
- **Context window: 96/100.** *Revised up from 93, and the reason is a premise being falsified.* The previous version placed this in the 85–94 band "rather than the 95–100 ≥1M band because **no retrieval measurement exists at any length**." **AA-LCR now exists at 81.3%** (84.00% at medium effort, 80.67% at low), and that is a measured long-context retrieval-and-reasoning result on the 1M window rather than a spec. It does not reach the methodology's ≥98%-at-512K threshold for a 100, and it is worth noting that the *same* test is what cut `claude-sonnet-3.5` to 65 at 27% and `gemini-2.0-flash` to 63 at 31.3% — **this model is the other end of that distribution.** LVBench 87.8% agentic corroborates on the multimodal long end.
- **Multimodal: 88/100.** *Revised up from 85.* The previous version capped at 85 because "**no MMMU, MMMUPro or DocVQA figure was found**." **MMMU-Pro is now measured at 85.61%** and **LMArena Vision at Elo 1314.08 (Verified)**, joining **CharXiv Reasoning 86.2%**, **LVBench 87.8% agentic** and **GDP.PDF 35.0%**. That is a measured multimodal profile rather than a breadth claim: chart reasoning, long video, native PDF, and a general-purpose VQA result in the mid-80s. Held below 90 because there is still **no DocVQA, OmniDocBench or MMMU** row and, as always, no Cyber-specific vision measurement exists.
- **Coding: 85/100.** *Revised up from 82.* **SciCode 56.60%** fills the flagged gap, the **AA Coding Index at 76.29** and **AA Agentic Index at 41.10** are on record per effort level, and **LiveBench Coding 72.49%** and **Agentic Coding 54.24%** are newly Verified, alongside **LMArena WebDev Elo 1583.46 (Verified)**. **DeepSWE v1.1 at 73.70%** and **Terminal-bench 2.1 at 87.64%** remain the load-bearing figures. Capped by the total absence of **SWE-bench Verified, LiveCodeBench and Aider Polyglot**; by **Terminal-bench 4.0 at 19.70%**; and by Vector Wire's independent verdict that the base model's Coding is **"Limited — 29.1% behind the leader"**, which is a fair characterisation of a model that is excellent at reasoning and unexceptional at repository-scale coding.
- **Cost efficiency: 80/100.** Unchanged. **$0.75 / $3.75 per MTok** introductory, **re-confirmed 2026-10-13 across all three tracked providers**, **rising to $1.50 / $7.50 on 2027-01-01**, and available **only to Fairwind Program participants**. Scored at 80 rather than near the ~$0.60/$2.20 ≈ 92 anchor for the current rate because the rate is temporary and the step is a doubling on both lines. The efficiency case against frontier models is strong and independently corroborated — **2.3–5.2× cheaper per token** (Google and Wiz agree), with Wiz measuring that gap **against a realised recall gain of +7.5–9.7%** rather than in isolation. Three honest deductions, two new: the **introductory price expires inside eleven weeks of this report**; **access is gated**, so for anyone outside the Fairwind Program this model is not purchasable at any price; and against the *field* rather than the frontier it is **above median — more expensive than two-thirds of 328 priced models**.
- **Overall Score: 88/100.** (85 + 88 + 96 + 88 + 85) / 5 = 442 / 5 = 88.4 → **88**, up from 84. **The composition is the story: four of five dimensions rose, and none of them rose because of anything Moonshot-style vendor marketing for the Cyber variant — they rose because an independent measurement ecosystem caught up to the base model.** Best fit, stated with the access condition attached: **a security team inside the Fairwind Program doing autonomous vulnerability discovery and patch generation at scale** — exactly the workflow Wiz measured, where a 2.3–5.2× per-token saving across hundreds of findings a day is the deciding factor and CWE-Bench shows the patching quality holds within 0.6 points of a frontier model. Chrome Security's **2.6× more correct patches** and Google's own team finding a critical vulnerability in under two hours remain the strongest real-world evidence any specialised model in this dataset carries. **Outside the Fairwind Program, use Gemini 3.8 Flash** (`gemini-3.8-flash`), which shares the same foundation, is generally available, now carries 28 independently verified measurements of its own, and costs the same. **Two things to watch, both newly relevant:** Terminal-Bench 4.0 at **19.70%** — this is a deep specialist, not a general agent, and the Cyber tuning reinforces rather than offsets that shape; and the fact that **Google's own Fairwind cyber page now showcases Gemini 4 Argon**, which means a security team evaluating this route in Q4 2026 should compare against Argon before committing, since Argon outscores this model on DeepSWE (77.9% vs 73.7%), LAB-Bench 2 (88.8% vs 86.2%), LVBench (91.7% vs 87.8%) and the AA Intelligence Index (53 vs 41) — at roughly 2.7× the introductory input price.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-13
- Method: third pass over this agent's own reports for this slug (58.6 → 84 → **88**).
  New sources this pass: **Google DeepMind's cyber landing page**, fetched 2026-10-13,
  which **no longer describes this model** and now serves **"Gemini 4 Argon with
  cybersecurity defense capabilities"** — recorded as an unresolved access/status
  question, with the new black-box-penetration-testing capability noted and **no
  retirement asserted**, since no deprecation notice exists and Vector Wire still
  indexes the model. **Vector Wire's Gemini 3.8 Flash record**, fetched 2026-10-13 and
  the single most valuable source this pass: **89 results on 46 benchmarks, 28
  independently verified, 48 aggregator-attributed, 13 vendor-reported, from 17 sources,
  latest 2026-10-13** — supplying **GPQA Diamond 95.2%, CritPt 18.2%, ARC-AGI-2
  89.17% (Verified), ARC-AGI-1 90.50%, FrontierMath Tier 4 21.95% and Tiers 1–3 68.42%
  (Verified, Epoch), Humanity's Last Exam 47.82%, SimpleQA 69.70% (Verified), SimpleBench
  82.40%, LiveBench Reasoning 89.29% and Mathematics 91.56%, AA Intelligence Index 41.00
  (Verified), AA Coding Index 76.29, AA Agentic Index 41.10, AA-Omniscience 29.55,
  AA-LCR 81.3%, SciCode 56.60%, τ³-Bench V3 Banking 44.95%, AA IT-Bench SRE 52.54%,
  Terminal-bench 2.1 87.64%, Terminal-bench 4.0 19.70% (confirmed independently),
  MMMU-Pro 85.61%, LMArena Vision 1314.08 and WebDev 1583.46 (both Verified), Arena ELO
  1495 (Verified), LiveBench Coding 72.49% and Agentic Coding 54.24% (Verified),
  HiL-Bench 41.47% (Verified)**, each reported at low/medium/high thinking effort where
  the source supports it; its per-capability verdicts (**Factuality and Reasoning
  "Strong", Long Context "Strong", Multimodal and Agentic "Capable", Instruction
  Following and Coding "Limited — 29.1% behind the leader", Math "Limited — 41.3% behind
  the leader"**); and its price finding that at a 3:1 blend this model **"costs more than
  66% of 328 priced models,"** recorded as a counterweight to the frontier-relative
  "2.3–5.2× cheaper" claim rather than as a contradiction of it. Also confirmed on
  2026-10-13: the **$0.75 / $3.75 introductory rate is unchanged across all three
  tracked providers**. Vendor-primary sources carried forward unchanged: Google
  DeepMind's Gemini 3.8 Flash Cyber model page, Google's launch blog, Gemini 3.8 Flash's
  DeepMind model card, Google AI developer documentation, and LLM Stats' CyberGym 86.2%
  and internal recall 71.0%. **Conflict adjudicated:** the frontier-relative cost framing
  versus the field-relative one — both are true at their respective reference points and
  both are recorded. **The central finding of this pass is that the inheritance caveat
  this file has carried since 2026-10-01 has been materially discharged** — not by a new
  Cyber-specific benchmark, which still does not exist and cannot exist under a
  Fairwind gate, but by the base model acquiring 28 independent measurements, which is
  why four of five dimensions moved up. Scores are normalized 1–100 interpretations per
  `model-comparison.md`, not official vendor scores; every inherited figure is labelled
  as inherited and every inherited *effort level* is named.
- Future sources: add a new file next to this one, e.g. `Gemini_3_8_Flash_Cyber_Argon.html`,
  using the same headings. Re-score when **any one of three things happens**: the
  **introductory pricing expires on 2027-01-01** (the Cost line is the one most exposed);
  **Google publishes an Argon-with-cyber benchmark table**, which would make the
  Fairwind-page succession decidable with numbers rather than inference; or **any
  Cyber-specific general-purpose benchmark is published**, which remains the one gap the
  inheritance caveat cannot fully close.