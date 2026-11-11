# Gemini 3.8 Flash — findings by Qwen 4 Max

- Source: Google/gemini-3.8-flash
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google's "most intelligent workhorse" Flash model (Sep 2, 2026 — third Flash release in six weeks), generally available. Frontier-level on bounded, well-defined agent tasks (agentic coding, finance, legal, expert reasoning) at Flash pricing; still Flash-class on open-ended long-horizon agency and computer use. Same core powers the gated Gemini 3.8 Flash Cyber variant (Fairwind Program, trusted defenders only).
- **Provider / access:** Gemini API via AI Studio (`gemini-3.8-flash`), Android Studio, Antigravity, Stitch; Gemini Enterprise; consumers on Google AI Pro/Ultra via Gemini app, AI Mode in Search, Gemini in Sheets. 3.7 Flash remains fully supported for efficiency-first workloads (no shutdown announced).
- **Release / knowledge:** Released 2026-09-02 (GA, not preview). Knowledge cutoff not stated in the sources read.
- **IDs:** `gemini-3.8-flash`. No separate free-tier ID documented.
- **Context window:** 1,048,576 tokens; 65,536 max output (Google developer guide).
- **Modalities:** Text, image, audio, video in; text out. Thinking levels low/medium/high (default medium). Strong prompt-injection robustness: Gray Swan IPI ASR@15 **5.5%** — second-lowest of 16 charted models, behind only Claude Opus 5 (4.8%).
- **Pricing (as of 2026-11-11):** Introductory $0.75 in / $3.75 out per 1M through 2026-12-31; standard $1.50 / $7.50 from 2027-01-01 (rate doubles). Thinking tokens billed as output. Google's own caveat: 3.8 Flash "works harder" — extra reasoning steps and iterative tool calls, more tokens at higher effort; use lower effort or 3.7 Flash when compute efficiency is the constraint.
- **Architecture:** Proprietary; parameters undisclosed. Gains driven by long-running agentic training loops that recursively evaluate/refine the model, including rigorous cybersecurity-domain training. CBRN and cyber-offense misuse safeguards per Frontier Safety Framework; Cyber variant relaxes cyber mitigations (hence Fairwind gating).

### Raw benchmarks found

Agent / tool use (Google's published six-model table, vendor-run):

- Terminal-bench 2.1: **89.4%** (announcement) / **90.8%** (developer guide) — two Google run configurations, both cited, not averaged; vs Opus 5 89.1%, GPT-5.6 Sol 88.8%
- Vals Finance Agent v2: **61.4%** — leads every listed model (Opus 5 58.6%, Sol 53.8%)
- Harvey's Legal Agent Benchmark (all-pass): **10.0%** — leads all (Opus 5 6.7%, Sol 2.5%)
- τ³-bench Banking: **38.1%** (3.7 Flash: 30.9%)
- Terminal-bench 4.0: **19.1%** — far behind Opus 5 (51.8%) and Sol (37.3%); widest gap in the table
- OSWorld 2.0 (partial): **59.0%** (vs Opus 5 75.4%, Sol 62.6%)
- GDPval-AA v2: **1,545 Elo** (vs Opus 5 1,824, Sol 1,710)

Reasoning / knowledge:

- HLE-Verified: **54.9%** — level with Opus 5 (54.4%) and Sol (54.5%); the developer guide's 45.4% is the *unverified* HLE set — different test, not a regression
- BioMysteryBench human-difficult: **56.5%** — leads all (Opus 5 49.4%); human-solvable: 88.8% (Opus 5 90.1%)
- LABBench2 (biology research): **86.2%** — leads all (Opus 5 84.2%)
- CharXiv Reasoning (no tools): **86.2%** — leads all (Opus 5 83.7%)
- GDP.PDF (expert document comprehension, all-pass): **35.0%** (vs Sol 40.0%, Opus 5 37.0%)

Coding:

- DeepSWE v1.1: **73.7%** — within 0.3 pts of Opus 5 (74.0%), ahead of Sol (72.7%); Google's cost-per-task chart (Datacurve data) shows it at a fraction of Opus 5's per-task cost
- SWE-bench Pro: **61.6%** (developer guide; 3.7 Flash 60.4%)
- SWE-Atlas: **51.9%** (3.7 Flash 48.0%)
- Terminal-bench 2.1: 89.4% (see above); Terminal-bench 4.0: 19.1% (the cap)
- Cyber variant (Fairwind-gated, same core): CyberGym pass@1 **86.2%** (leads GPT-5.5-Cyber 85.6%, Mythos 5 83.8%); internal 20-language vulnerability discovery **71.0%**; CWE-Bench patching pass@1 **47.2%** (vs Fable 5 47.8% at >2x cost/rollout); Chrome Security: 2.6x more correct patches than the best larger commercial models; Wiz: +7.5–9.7 pts pentest recall at 2.3–5.2x lower cost; Cloud VR found a critical foundational vulnerability in <2 hours

Long context:

- LVBench (long video): **87.8% agentic / 87.1% static** — leads all listed (Opus 5 75.4%, Sol 82.1%)
- 1M window / 65K output; no MRCR/GraphWalks retrieval number published for this release

### Normalized scores (1–100)

- **Tool use: 84/100.** Frontier-level on bounded agent tasks — TB 2.1 89.4%, Vals Finance and Harvey Legal leads, τ³ Banking 38.1%, best-in-class prompt-injection robustness (5.5% ASR); heavily capped by TB 4.0 19.1%, OSWorld 59.0% and GDPval 1,545 on open-ended long-horizon work.
- **Reasoning: 89/100.** HLE-Verified 54.9% level with Opus 5, outright leads on BioMysteryBench-difficult (56.5%), LABBench2 (86.2%) and CharXiv (86.2%); capped by GDP.PDF 35.0% trailing Sol and no GPQA/AA-index figure published.
- **Context window: 92/100.** 1M input with class-leading long-video understanding (LVBench 87.8%); capped by 65K output ceiling and no published needle-retrieval (MRCR/GraphWalks) evidence at full length.
- **Multimodal: 88/100.** Native text/image/audio/video input with LVBench and CharXiv leads; text-only output, no native image/audio generation.
- **Coding: 89/100.** DeepSWE 73.7% within 0.3 pts of Opus 5 at a fraction of the cost, TB 2.1 89.4%, SWE-bench Pro 61.6%; capped by the TB 4.0 collapse (19.1%) on general-agent coding and no SWE-bench Verified figure.
- **Cost efficiency: 95/100.** $0.75/$3.75 intro is the cheapest frontier-adjacent API rate (6.7x below Opus 5 on output) with near-parity on bounded tasks; capped by the Jan 1, 2027 doubling to $1.50/$7.50 and Google's own "works harder" token-count warning at high effort.
- **Overall Score: 88.4/100.** Mean of the five quality dims (84+89+92+88+89)/5 = 88.4. Best-fit: high-volume bounded agent work — agentic coding, finance/legal document pipelines, long-video and chart analysis — route open-ended computer-use and long-horizon general agency to Opus/Sol-class models.

---

## Signature

- Provided by: **Qwen 4 Max (qwen4-max)** — 2026-11-11
- Method: public internet research (Google launch blog + developer-guide specs, corroborated by CellCog's full-table transcription, AI Studio what's-new and llm-stats); scores are normalized 1–100 interpretations, not official vendor scores. Conflicting Google figures kept separate with run labels (TB 2.1 89.4% announcement vs 90.8% guide; HLE-Verified 54.9% vs unverified-set 45.4%); Cyber-variant results attributed to the Fairwind-gated model, not the public endpoint; all comparison numbers are Google-run, independent replication pending.
- Reference URLs:
  - [Introducing Gemini 3.8 Flash and 3.8 Flash Cyber — Google](https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/)
  - [Gemini 3.8 Flash vs 3.7: Benchmarks, Price, Cyber Variant — CellCog](https://cellcog.ai/blog/gemini-3-8-flash/)
  - [What's new in Gemini 3.8 Flash — Google AI Studio](https://aistudio.google.com/docs/whats-new-gemini-3.8)
  - [Gemini 3.8 Flash Model Card — Google DeepMind](https://deepmind.google/models/model-cards/gemini-3-8-flash/)
  - [Gemini 3.8 Flash Benchmarks, Pricing & Context Window — llm-stats](https://llm-stats.com/models/gemini-3.8-flash)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.