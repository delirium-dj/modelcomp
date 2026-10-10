# Gemini 3.8 Flash — findings by Qwen 3.7 Plus

- Source: Google/Gemini 3.8 Flash (`google/gemini-3.8-flash`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google DeepMind's most intelligent Flash model, released September 2, 2026. Matches or exceeds frontier models (Claude Opus 5, GPT-5.6 Sol) on many benchmarks at a fraction of the cost. Features three thinking levels and native multimodal input including audio and video.
- **Provider / access:** Gemini API via Google AI Studio (`gemini-3.8-flash`); Google Cloud Vertex AI; OpenCode Zen `opencode/gemini-3.8-flash`. Free tier available on Google AI Studio and OpenCode Zen. Chat Completions API.
- **Release / knowledge:** 2026-09-02 release; knowledge cutoff March 2026.
- **IDs:** `google/gemini-3.8-flash-20260902` (versioned); `gemini-3.8-flash` (alias). Free ID available on OpenCode Zen.
- **Context window:** 1,048,576 tokens (1M) total; 65,536 max output.
- **Modalities:** Text, image, audio, video in; text out. Reasoning yes (three thinking levels: low, medium, high; default medium). Tool calls supported. JSON mode supported. Google Search grounding supported.
- **Pricing (as of 2026-10-10):** Introductory (through Dec 31, 2026): $0.75 in / $3.75 out per 1M tokens. Standard (from Jan 1, 2027): $1.50 in / $7.50 out per 1M tokens. Thinking tokens billed as output. Free tier available.
- **Architecture:** Proprietary; parameter count not disclosed. Part of Google's Flash model family optimized for cost-efficiency.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **89.4%** (Google; also listed at 90.8% in developer guide — different run configurations)
- Terminal-Bench 4.0: **19.1%** (Google; significantly behind Claude Opus 5's 51.8%)
- GDPval-AA v2.1: **1545 Elo** (Google)
- Vals Finance Agent v2: **61.4%** (Google; leads Claude Opus 5's 58.6%)
- Harvey's Legal Agent Benchmark: **10.0%** all-pass rate (Google; leads all models in comparison)
- τ³-bench Banking: **38.1%** (Google developer guide)
- OSWorld 2.0 (computer use, partial): **59.0%** (Google; behind Claude Opus 5's 75.4%)
- CharXiv Reasoning (no tools): **86.2%** (Google)
- GDP.PDF (expert document comprehension): **35.0%** all-pass (Google)

Reasoning / knowledge:

- GPQA Diamond: **95.3%** (Artificial Analysis independent, high effort; #1 on leaderboard)
- HLE-Verified (Humanity's Last Exam): **54.9%** (Google; matches Claude Opus 5's 54.4% and GPT-5.6 Sol's 54.5%)
- Artificial Analysis Intelligence Index: **41** (#43 of 227 at standard effort; 33.5 at low effort)
- BioMysteryBench (human solvable): **88.8%** (Google)
- BioMysteryBench (human difficult): **56.5%** (Google)
- LABBench2 (biology research): **86.2%** (Google)

Coding:

- DeepSWE v1.1: **73.7%** (Google; ties Claude Opus 5's 74.0%)
- SWE-bench Pro: **61.6%** (Google developer guide)
- SWE-Atlas: **51.9%** (Google developer guide)
- Terminal-Bench 2.1: **89.4%** (also listed under tool use)
- Terminal-Bench 4.0: **19.1%** (also listed under tool use — significant weakness)
- LiveCodeBench: no verified public score found
- SWE-bench Verified: no verified public score found

Long context:

- LVBench (long video understanding): **87.8% agentic / 87.1% static** (Google; leads all models in comparison)
- No specific MRCR text-based long-context retrieval scores published

### Normalized scores (1–100)

- **Tool use: 80/100.** Terminal-Bench 2.1 at 89.4% is excellent and matches frontier models. Vals Finance 61.4% and Harvey Legal 10.0% lead their categories. However, Terminal-Bench 4.0 at 19.1% is a significant weakness (vs. Opus 5's 51.8%), and OSWorld 59.0% trails Claude models. The split between strong bounded-task performance and weak open-ended agentic performance caps the score.
- **Reasoning: 90/100.** GPQA Diamond 95.3% is #1 on the Artificial Analysis leaderboard — outstanding. HLE-Verified 54.9% matches frontier models. Intelligence Index 41 ranked #43 overall. BioMysteryBench and LABBench2 scores are strong. Capped by the moderate Intelligence Index score relative to top-ranked models.
- **Context window: 82/100.** 1M-token context window matches competitors. However, max output is only 65,536 tokens (vs. 128K for Claude Opus 5.5). No specific MRCR or long-context text retrieval benchmarks were published. LVBench 87.8% demonstrates strong long-video understanding. Capped by the smaller output limit and absence of text-based long-context retrieval scores.
- **Multimodal: 86/100.** Supports text, image, audio, and video input — the broadest input modality set among compared models. LVBench 87.8% for long video understanding leads all models. OSWorld 59.0% for computer use is moderate. No audio output. Strong multimodal capability overall.
- **Coding: 78/100.** DeepSWE 73.7% ties Claude Opus 5. Terminal-Bench 2.1 at 89.4% is excellent. SWE-bench Pro 61.6% and SWE-Atlas 51.9% are moderate. However, Terminal-Bench 4.0 at 19.1% is a major weakness that significantly caps the score — it suggests the model struggles with open-ended, long-horizon coding agents despite excelling at bounded terminal-coding tasks.
- **Cost efficiency: 92/100.** At $0.75/$3.75 per 1M tokens (introductory), this is among the cheapest models that matches frontier performance. Free tier available. Even at standard 2027 rates ($1.50/$7.50), it remains very affordable. Google notes the model "works harder" and may use more tokens, but the per-token cost is still a fraction of Opus-class models. Exceptional value.
- **Overall Score: 83/100.** Mean of five quality dims: (80 + 90 + 82 + 86 + 78) / 5 = 83.2, rounded to 83. A cost-efficient frontier-class model with outstanding GPQA and DeepSWE scores, broad multimodal input, and excellent value. Best fit for bounded agentic tasks, professional knowledge work, and high-volume deployments where cost matters. The Terminal-Bench 4.0 gap and smaller output limit are the main trade-offs.

---

## Signature

- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-10
- Method: public internet research across Google official announcements, Artificial Analysis, CellCog, OpenRouter, DataLearner, Epoch AI, and other benchmark aggregators; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.7_Plus.md`, using the same headings.
