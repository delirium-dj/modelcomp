# Gemini 3.8 Flash Cyber — findings by Ling 3.1 Flash

- Source: Ling 3.1 Flash (opencode/ling-3.1-flash-free) / Gemini 3.8 Flash Cyber
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash Cyber
- **Short description:** Google DeepMind's cybersecurity fine-tune of Gemini 3.8 Flash — frontier-level vulnerability detection and automated patching for trusted defenders, distributed through the Fairwind Program (national cyber authorities, critical-infrastructure operators, software maintainers; academic defensive-benchmarking labs welcome).
- **Provider / access:** Google DeepMind — Fairwind Program only; not generally available, with more permissive cyber mitigations than the standard model (DataCamp). (DeepMind's Fairwind page now also offers Gemini 4 Argon with cyber capabilities plus CodeMender — the program's lineup is evolving.) Independent check (Kingy, 2026-09-02): no separate public Cyber model card, and no disclosed public API ID, context window, documented modalities or rate card for the Cyber deployment — "Flash-level cost" is a vendor characterization; most organizations cannot buy or reproduce the deployment today.
- **Release / knowledge:** Released 2026-09-02 alongside Gemini 3.8 Flash. Knowledge cutoff not stated in captured sources.
- **IDs:** `google/gemini-3-8-flash-cyber` (repo meta.json). No Free ID on Zen (meta.json `noFreeId: true`).
- **Context window:** 1,048,576 tokens (1M) / 65K output (repo meta.json).
- **Modalities:** Text, code in; text, code out (repo meta.json). The base Gemini 3.8 Flash is natively multimodal; the Cyber variant's support beyond text/code is unverified.
- **Pricing (as of 2026-10):** No public pricing (restricted program). Base model: $0.75 input / $3.75 output per 1M introductory (through 2026-12-31; $1.50/$7.50 from 2027-01-01), $0.075 cached, free tier on the Gemini API.
- **Architecture:** proprietary fine-tune of Gemini 3.8 Flash.

### Raw benchmarks found

Cybersecurity-specific (Google launch blog + BenchmarkList, 2026-09-02):

Agent / tool use:

- CyberGym (autonomous vulnerability discovery, C/C++ one-shot vulnerability reproduction, Final-submission setting): **86.2%** score (BenchmarkList now ranks it 8/43, 83rd pct; field leader DeepSeek-V4-Flash 93.17). Comparison chart: GPT-5.5-Cyber 85.6%, Mythos 5 83.8%, GPT-5.6 Sol 83.6%, Gemini 3.5 Flash Cyber 77.5% — the 0.6pp lead over GPT-5.5-Cyber came from different owners' proprietary harnesses (Google ran its own model in an internal Antigravity harness), too small to support a sweeping superiority claim. Google: "frontier-level performance… surpasses 3.5 Flash Cyber as well as significantly larger frontier models."
- CWE-Bench v0 (Collinear AI / Artificial Analysis, external held-out audit-and-patch, 100 tasks / 54 CWEs / 6 language groups — C/C++, Go, JS/TS, Java, Python, Rust; agent not told the vulnerability or defect count): **Pass@1 47.2%** with Antigravity harness, high thinking (rank 2/14, 92nd pct) — 0.6pp behind Fable 5 with Claude Code (47.8%, $10.27 mean billed cost per rollout) at ~64.6% lower rollout cost ($3.64); GPT-5.6 Sol with Codex 44.2% ($2.29), Gemini 3.7 Flash with Antigravity 44.0% ($1.43), Claude Opus 4.8 42.0% ($2.43). Two-sided cost story: Cyber costs ~59% more than GPT-5.6 Sol for its 3pp advantage and ~154.5% more than Gemini 3.7 Flash for 3.2pp. "Cost per rollout" is mean billed API spend per agent task — not a production rate card.
- Internal 20-language benchmark (Google-private set of 1,200+ recent confirmed historical vulnerabilities, internal non-cyber-specialized Antigravity harness): **71.0% recall** (vendor) — +12.1pp over Gemini 3.7 Flash (58.9%) and +24.4pp over Gemini 3.5 Flash Cyber (46.6%); the least reproducible headline benchmark (entirely private).
- Chrome Security team: **2.6× more correct patches** than much larger best commercial models (vendor).
- Wiz internal penetration-testing benchmark: **+7.5–9.7% higher recall** at 2.3–5.2× lower cost (vendor).
- Google Cloud Vulnerability Research: critical foundational vulnerability found in <2 hours (typically months) (vendor anecdote).

Base-model benchmarks (inherited from Gemini 3.8 Flash — NOT separately measured for the Cyber variant):

- DeepSWE v1.1: **73.7%** (self-computed, mini-swe agent harness, high thinking).
- Terminal-Bench 2.1: **89.4%** (model card, self-computed) / **90.8%** (Google Cloud docs comparison; 3.7 Flash: 81.6%).
- Terminal-Bench 4.0: **19.1%** (official public leaderboard, highest thinking level).
- HLE-Verified (full 1,811-item verified set): **54.9%** (self-computed).
- SWE-Bench Pro: **61.6%**; SWE-Atlas: **51.9%**; τ³-Bench Banking: **38.1%**; CharXiv: **86.2%**; GDP.pdf: **35.0%**; HLE (classic): **45.4%**.
- Gray Swan IPI (combined attack set, transfer-only, no computer use; lower is better): **6.0%** attack success rate @15 (BenchmarkList: rank 6/19, 72nd pct; field leader Fable 5.1 at 1.0%) — strong but does **not** beat the general Gemini 3.8 Flash (5.5%); Claude Opus 5 4.8%, Claude Fable 5 6.5%, Claude Sonnet 5 6.7%, Gemini 3.7 Flash 9.2%.

Reasoning / knowledge: no Cyber-variant-specific score found (see inherited HLE-Verified 54.9% above).
Coding: no Cyber-variant-specific score found beyond CWE-Bench (see inherited DeepSWE/TB above).
Long context: no MRCR/RULER score found; 1M window.
Multimodal: no Cyber-variant-specific score found.

### Normalized scores (1–100)

- **Tool use: 75/100.** CyberGym 86.2% (narrow 0.6pp lead across mismatched owner harnesses) and CWE-Bench 47.2% (0.6pp behind Fable 5 at ~64.6% lower rollout cost) are competitive-not-dominant domain-agentic evidence with real-world validation (Chrome 2.6×, Wiz recall gains, 71.0% recall on Google's private 20-language set); no TB2.1/MCP-Atlas measured for the variant (base TB 2.1 89.4% is inherited, not measured).
- **Reasoning: 79/100.** Base-model HLE-Verified 54.9% clears the 40% frontier anchor; the Cyber fine-tune's general reasoning is not separately measured (inherited).
- **Context window: 95/100.** 1M tokens / 65K output per the repo's meta.json; Kingy notes the Cyber deployment's context window is not separately disclosed (no public Cyber model card) — inherited from the base.
- **Multimodal: 15/100.** Text+code in/out per repo meta.json; the base model is natively multimodal but the Cyber variant's broader modality support is unverified.
- **Coding: 75/100.** Base DeepSWE 73.7% / TB 2.1 89.4% are inherited, and CWE-Bench 47.2% measures security patching directly; no SWE-bench Verified for the variant.
- **Cost efficiency: 90/100.** No public pricing (restricted program); the base model's $0.75/$3.75 introductory rate anchors the estimate. CWE-Bench evidence cuts both ways: $3.64/rollout is ~64.6% cheaper than Fable 5 ($10.27) but ~59% pricier than GPT-5.6 Sol ($2.29) and ~154.5% pricier than Gemini 3.7 Flash ($1.43).
- **Overall Score: 67.8/100.** Mean of the five quality dimensions; a domain-excellent security model whose scores are mostly inherited from the base, with a text/code-only multimodal penalty per the repo's metadata.

---

## Update 2026-10-11 (deep second pass, 3 independent searches)

**No score changes** — Tool 75 / Reasoning 79 / Context 95 / Multimodal 15 / Coding 75 / Cost 90, Overall stays 67.8. The second pass sharpened the evidence base rather than the scores: the Cyber-variant sheet is small (CyberGym, CWE-Bench, Gray Swan IPI, one private 20-language set) and every row is vendor-run or gated, but the comparisons are now fully quantified:

- **CyberGym 86.2% (Final-submission setting)** — leads the five-model chart (GPT-5.5-Cyber 85.6%, Mythos 5 83.8%, GPT-5.6 Sol 83.6%, Gemini 3.5 Flash Cyber 77.5%), but Google ran its own model in an internal Antigravity harness while comparison scores came from other owners; the 0.6pp lead over GPT-5.5-Cyber is "too small to support a sweeping superiority claim when harnesses, sampling variance and owner-run pipelines differ" (Kingy). BenchmarkList's board has since grown to 43 entries (now 8/43, 83rd pct; field leader DeepSeek-V4-Flash 93.17).
- **CWE-Bench v0 (Collinear AI / Artificial Analysis)** — the strongest purchasing evidence: 47.2% Pass@1 (Antigravity, high thinking) vs Fable 5's 47.8% (Claude Code, $10.27/rollout) at ~64.6% lower cost ($3.64); GPT-5.6 Sol 44.2% ($2.29), Gemini 3.7 Flash 44.0% ($1.43), Claude Opus 4.8 42.0% ($2.43). The cost story has two sides: Cyber is ~59% pricier than GPT-5.6 Sol for a 3pp advantage and ~154.5% pricier than Gemini 3.7 Flash for 3.2pp (Kingy's calculations from the leaderboard's rounded costs). "Cost per rollout" is mean billed API spend per agent task — model pricing, token use and harness behavior — not a production rate card.
- **Google's private 20-language vulnerability set** is now quantified: **71.0% recall** over 1,200+ recent confirmed historical vulnerabilities (internal non-cyber-specialized Antigravity harness), +12.1pp over Gemini 3.7 Flash (58.9%) and +24.4pp over Gemini 3.5 Flash Cyber (46.6%) — the least reproducible headline benchmark (entirely private).
- **Gray Swan IPI nuance**: the 6.0% ASR@15 is strong but does **not** beat the general Gemini 3.8 Flash (5.5%); Claude Opus 5 leads the disclosed chart at 4.8% (Fable 5 6.5%, Sonnet 5 6.7%, 3.7 Flash 9.2%). Lower is better.
- **Deployment transparency gaps (Kingy, 2026-09-02)**: no separate public Cyber model card; public API ID, context window, documented modalities and rate card all "not disclosed for the Cyber deployment." The 1M/65K window and text/code-only modalities in this file come from Google's repo meta.json. Access is the binding constraint: "Most organizations cannot buy or reproduce the deployment today" — Fairwind is gated to trusted government authorities, critical-infrastructure operators and software maintainers, with academic defensive-benchmarking labs welcome.
- **Provenance class of each row** (per Kingy): CWE-Bench is a public external benchmark (public method, held-out tasks, but gated model — most outsiders cannot rerun); CyberGym is a public benchmark with owner-run model results; Gray Swan is a partner-run evaluation with disclosed configuration; the 20-language set is entirely private. Treating the table as one homogeneous leaderboard would overstate the evidence.
- **Program has moved on**: DeepMind's model page now leads with Gemini 4 Argon (cybersecurity defense capabilities) rolling out via Fairwind, plus CodeMender.
- Traictory's pull lists a Gray Swan IPI "94.0%" figure that contradicts every other source's 6.0% ASR — flagged as a parsing artifact, not adopted.
- Still open: any Cyber-variant-specific DeepSWE/TB 2.1/SWE-bench Verified, MCP-Atlas, MRCR/RULER, and any independent (non-Google) rerun — blocked by program access.
- Score impact: none — the new reads (0.6pp CyberGym lead, 71.0% recall, CWE-Bench cost two-sidedness) refine the rationale for the existing bands rather than moving them; Overall stays (75+79+95+15+75)/5 = 67.8.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-03 (updated 2026-10-11)
- Method: public internet research (Google launch blog, DeepMind model page, BenchmarkList, DataCamp, Kingy, Traictory, technoparticles, samcodeman); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
