# Gemini 3.7 Flash — findings by Qwen 3.7 Plus

- Source: Google/Gemini 3.7 Flash (`google/gemini-3.7-flash`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** Google DeepMind's high-intelligence workhorse model for coding and agents, released August 13, 2026. Predecessor to Gemini 3.8 Flash (released 3 weeks later at the same price). Features three thinking levels and broad multimodal input. Remains fully supported for efficiency-first workloads.
- **Provider / access:** Gemini API (`gemini-3.7-flash`); Google Cloud Vertex AI; OpenCode Zen. Free tier available on Google AI Studio and OpenCode Zen.
- **Release / knowledge:** 2026-08-13 release; knowledge cutoff not precisely documented.
- **IDs:** `google/gemini-3.7-flash` (Gemini API). Free ID available on OpenCode Zen.
- **Context window:** 1,048,576 tokens (1M) total; 65,536 max output.
- **Modalities:** Text, image, audio, PDF in; text out. Reasoning yes (three thinking levels: low, medium, high; default medium). Tool calls supported. JSON mode supported.
- **Pricing (as of 2026-10-10):** Introductory (through Dec 31, 2026): $0.75 in / $3.75 out per 1M tokens. Standard (from Jan 1, 2027): $1.50 in / $7.50 out per 1M tokens. Free tier available.
- **Architecture:** Proprietary; parameter count not disclosed. Part of Google's Flash model family.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85.8%** (Google; also listed at 81.6% in developer guide — different run configurations)
- Terminal-Bench 4.0: **11.2%** (Google; significant weakness vs. 3.8 Flash's 19.1%)
- GDPval-AA v2.1: **1482 Elo** (Google)
- Vals Finance Agent v2: **59.0%** (Google)
- Harvey's Legal Agent Benchmark: **8.8%** all-pass rate (Google)
- τ³-bench Banking: **30.9%** (Google developer guide)
- OSWorld 2.0 (computer use, partial): **50.6%** (Google)
- CharXiv Reasoning (no tools): **84.5%** (Google)
- GDP.PDF: **34.0%** all-pass (Google)

Reasoning / knowledge:

- HLE-Verified (Humanity's Last Exam): **53.6%** (Google)
- HLE (unverified set): **45.7%** (Google developer guide)
- Artificial Analysis Intelligence Index: **56** (emergent.sh; at high effort)
- BioMysteryBench (human solvable): **87.1%** (Google)
- BioMysteryBench (human difficult): **43.5%** (Google)
- LABBench2 (biology research): **82.1%** (Google)

Coding:

- DeepSWE v1.1: **65.3%** (Google; vs 3.8 Flash's 73.7%)
- SWE-bench Pro: **60.4%** (Google developer guide)
- SWE-Atlas: **48.0%** (Google developer guide)
- Terminal-Bench 2.1: **85.8%** (also listed under tool use)
- Terminal-Bench 4.0: **11.2%** (also listed under tool use)
- LiveCodeBench: no verified public score found
- SWE-bench Verified: no verified public score found

Long context:

- LVBench (long video understanding): **85.4%** (Google)
- No specific MRCR text-based long-context retrieval scores published

### Normalized scores (1–100)

- **Tool use: 76/100.** Terminal-Bench 2.1 at 85.8% is strong. Vals Finance 59.0% and Harvey Legal 8.8% are moderate. However, Terminal-Bench 4.0 at 11.2% is very weak (vs. 3.8 Flash's 19.1%), and OSWorld 50.6% is moderate. The split between strong bounded-task performance and very weak open-ended agentic performance caps the score.
- **Reasoning: 86/100.** HLE-Verified 53.6% is strong (close to frontier). Intelligence Index 56 at high effort is solid. BioMysteryBench and LABBench2 scores are strong. Capped by being surpassed by 3.8 Flash on most reasoning benchmarks.
- **Context window: 80/100.** 1M-token context window matches competitors. However, max output is only 65,536 tokens. No specific MRCR retrieval scores. LVBench 85.4% for long video is strong. Capped by the smaller output limit.
- **Multimodal: 82/100.** Supports text, image, audio, and PDF input — broad multimodal set. Text-only output. LVBench 85.4% for long video understanding is strong. No video input explicitly confirmed (vs. 3.8 Flash). Capped by text-only output.
- **Coding: 72/100.** DeepSWE 65.3% is moderate (vs. 3.8 Flash's 73.7%). Terminal-Bench 2.1 at 85.8% is strong. SWE-bench Pro 60.4% and SWE-Atlas 48.0% are moderate. Terminal-Bench 4.0 at 11.2% is very weak. The coding performance is solid but clearly surpassed by 3.8 Flash.
- **Cost efficiency: 90/100.** At $0.75/$3.75 per 1M tokens (introductory), this is among the cheapest frontier-class models. Free tier available. Even at standard 2027 rates ($1.50/$7.50), very affordable. Excellent value for a Flash-class model.
- **Overall Score: 79/100.** Mean of five quality dims: (76 + 86 + 80 + 82 + 72) / 5 = 79.2, rounded to 79. A cost-efficient Flash-class model with strong bounded-task performance, broad multimodal input, and excellent value. Surpassed by successor Gemini 3.8 Flash on most benchmarks at the same price. Best fit for efficiency-first workloads, bounded agentic tasks, and high-volume deployments where cost matters more than cutting-edge performance. The Terminal-Bench 4.0 weakness and smaller output limit are trade-offs.

---

## Signature

- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-10
- Method: public internet research across Google official announcements, CellCog, emergent.sh, OpenRouter, DataCamp, and other benchmark aggregators; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.7_Plus.md`, using the same headings.
