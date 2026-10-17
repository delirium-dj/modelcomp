# Gemini 3.7 Flash — findings by Beam

- Source: Google/Gemini 3.7 Flash, `google/gemini-3.7-flash`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** Google's "most intelligent workhorse" Flash (Aug 13, 2026) for coding, agentic workflows, multi-step execution; deprecated and auto-routed to 3.8 Flash. Improved safeguards in CBRN and cyber offense.
- **Provider / access:** Google AI Studio / Vertex AI `gemini-3.7-flash` (deprecated → 3.8 Flash); OpenRouter.
- **Release / knowledge:** Released 2026-08-13; knowledge cutoff not stated.
- **IDs:** `google/gemini-3.7-flash`
- **Context window:** 1,048,576 tokens; max output 65,536.
- **Modalities:** text, image, video, audio, file (PDF) in; text out; reasoning yes (low/medium/high thinking); tool calling yes; structured output yes.
- **Pricing (as of 2026-10-17):** $0.75 / 1M input, $3.75 / 1M output; paid.
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85.8%**; Terminal-Bench 3.0: **14.9%**
- Terminal-Bench 2.1 (Vals): **77.5%**
- AutomationBench: **30.4%**
- OSWorld 2.0: **47.9%**
- Agents' Last Exam: **26.3%**
- ApprenticeBench: **16%**; MazeBench: **1%**
- Agentic public-lane (BenchLM): **59.2** (#29/128)
- GDPval-AA: **1525 Elo** / 44.6% (AA)

Reasoning / knowledge:

- ARC-AGI-1: **95.50%**; ARC-AGI-2: **84.6%**; ARC-AGI-3: not reported
- MRCR v2 64K-128K: **97%**
- HLE-Verified: **53.6%** (from 3.8 Flash model card cross-ref)
- BioMysteryBench (human-solvable): **87.1%**; (human-difficult): **43.5%**
- FrontierMath v2 (Tiers 1-3): **71.579%**; Tier 4: **36.585%**
- AA Intelligence Index: no verified figure found

Coding:

- DeepSWE: **65.3%**
- AA-SciCode: **57.2%**
- Coding public-lane (BenchLM): **57.6** (#24/150)
- FrontierCode 1.1 Main: **43.6%**
- SWE-bench Verified/Pro: no verified public score found

Long context:

- 1M window; MRCR v2 64K-128K 97%; CharXiv 88.7%, CharXiv w/o tools 84.5%, LVBench 85.4%.

### Normalized scores (1–100)

- **Tool use: 76/100.** Terminal-Bench 2.1 85.8%, agentic lane #29/128 (59.2), OSWorld 47.9%, AutomationBench 30.4%; caps at Agents' Last Exam 26.3%.
- **Reasoning: 82/100.** ARC-AGI-1 95.5%, ARC-AGI-2 84.6%, HLE-Verified 53.6%, FrontierMath Tier4 36.585%; caps at MRCR beyond 128K not reported.
- **Context window: 82/100.** 1M window with MRCR v2 97% at 64K-128K; caps at no published beyond-128K retrieval.
- **Multimodal: 88/100.** Text/image/video/audio/PDF in; CharXiv 88.7%, LVBench 85.4%.
- **Coding: 74/100.** DeepSWE 65.3%, AA-SciCode 57.2%, coding lane #24/150 (57.6); caps at unverified SWE-bench.
- **Cost efficiency: 90/100.** Low pricing $0.75/$3.75 per 1M.
- **Overall Score: 80/100.** Mean of five quality dims (BenchLM aggregate 66.82); best-fit for high-volume agentic + multimodal at low cost (deprecated → use 3.8 Flash).

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Google DeepMind model card/blog, BenchLM, Thurrott); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.