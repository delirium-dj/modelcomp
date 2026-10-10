# Gemini 3.1 Pro — findings by Qwen 3.7 Plus

- Source: Google/Gemini 3.1 Pro (`google/gemini-3.1-pro`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro
- **Short description:** Google DeepMind's Pro-tier flagship, released February 19, 2026. Carries the upgraded core intelligence from Deep Think, distributed for wider developer and enterprise use. Features three thinking levels (low, medium, high) and a 2M-token context window — the largest among frontier models. Still in preview status as of October 2026.
- **Provider / access:** Gemini API (`gemini-3.1-pro-preview`); also `gemini-3.1-pro-preview-customtools` for agentic workflows with custom tool definitions; Google Cloud Vertex AI; OpenCode Zen. Free tier available on Google AI Studio and OpenCode Zen.
- **Release / knowledge:** 2026-02-19 release (preview); knowledge cutoff not precisely documented (reported as January 2025 by some sources, but likely more recent given the February 2026 release date).
- **IDs:** `google/gemini-3.1-pro-preview` (versioned); Gemini API and Google AI Studio. Free ID available.
- **Context window:** 2,097,152 tokens (2M) total; 65,536 (64K) max output. Long-context premium applies above 200K tokens.
- **Modalities:** Text, image, audio, video, PDF, and code repositories in; text out. Reasoning yes (three thinking levels: low, medium, high). Tool calls supported. JSON mode supported. Google Search grounding supported.
- **Pricing (as of 2026-10-10):** Up to 200K context: $2 in / $12 out per 1M tokens. Above 200K: $4 in / $18 out per 1M tokens. Cache read: $0.20/$0.40 plus storage. Free tier available.
- **Architecture:** Proprietary; parameter count not disclosed. Part of Google's Gemini Pro family with Deep Think-derived intelligence.

### Raw benchmarks found

Agent / tool use:

- MCP Atlas: improved by 15 percentage points over Gemini 3 Pro (exact score not published; Google reports 69.2% for 3.1 Pro in NeuralTrust comparison)
- GDPval-AA v2.1: **1317 Elo** (Google; behind Claude Sonnet 4.6's 1633)
- BrowseComp: strong score reported but exact number not published
- τ³-bench Banking: no verified public score found for 3.1 Pro specifically

Reasoning / knowledge:

- ARC-AGI-2: **77.1%** (Google; massive jump from Gemini 3 Pro's 31.1%; leads GPT-5.2's 52.9% and Claude Opus 4.6's 68.8%)
- GPQA Diamond: **94.3%** (Google; top position among publicly evaluated models at release)
- Artificial Analysis Intelligence Index: **30** (#87 of 227; preview status)
- MMMU-Pro (advanced multimodal reasoning): **80.5%** (Google; slightly below Gemini 3 Pro's 81.0%)

Coding:

- SWE-bench Verified: **80.6%** (Google; 0.2 points behind Claude Opus 4.6's 80.8% at release)
- SWE-bench Pro: **54.2%** (Google DeepMind)
- LiveCodeBench Pro: **Elo 2887** (Google; large jump from Gemini 3 Pro's 2439)
- Terminal-Bench: no verified public score found for 3.1 Pro specifically
- DeepSWE: no verified public score found for 3.1 Pro specifically

Long context:

- 2M-token context window (largest among frontier models)
- No specific MRCR or long-context retrieval scores published
- Long-context premium pricing above 200K tokens

### Normalized scores (1–100)

- **Tool use: 80/100.** MCP Atlas improved by 15 points over Gemini 3 Pro, reaching 69.2%. GDPval-AA 1317 Elo is moderate compared to frontier leaders. BrowseComp results are strong but exact numbers are not publicly available. The customtools endpoint for agentic workflows is a differentiator. Capped by the moderate GDPval-AA Elo relative to top-ranked models.
- **Reasoning: 88/100.** ARC-AGI-2 at 77.1% is outstanding and leads all compared models. GPQA Diamond 94.3% was top-position at release. Intelligence Index 30 ranked #87 is moderate, likely affected by preview status and different evaluation timing. Capped by the moderate Intelligence Index score.
- **Context window: 90/100.** 2M-token context window is the largest among frontier models — double most competitors. 64K max output is standard. Long-context premium above 200K is a cost consideration. No specific MRCR retrieval scores, but the window size itself is best-in-class.
- **Multimodal: 82/100.** Supports text, image, audio, video, PDF, and code repository input — the broadest input set. MMMU-Pro 80.5% is strong. Text-only output. No audio output. Strong multimodal capability but slightly behind Gemini 3.8 Flash on some multimodal benchmarks.
- **Coding: 85/100.** SWE-bench Verified 80.6% was competitive at release (0.2 behind Opus 4.6). LiveCodeBench Pro Elo 2887 is a large jump. SWE-bench Pro 54.2% is moderate. No Terminal-Bench or DeepSWE scores found specifically for 3.1 Pro. Capped by the absence of some key coding benchmark results and the model's preview status.
- **Cost efficiency: 72/100.** $2/$12 per 1M tokens (up to 200K) is moderate — cheaper than Opus-class models but more expensive than Flash models. The 200K premium ($4/$18) is significant for long-context workloads. Free tier available. Context caching can reduce costs by up to 75%. Reasonable value for a Pro-tier model with 2M context.
- **Overall Score: 85/100.** Mean of five quality dims: (80 + 88 + 90 + 82 + 85) / 5 = 85.0. A strong Pro-tier multimodal model with best-in-class context window (2M), outstanding reasoning (ARC-AGI-2, GPQA), and competitive coding. Best fit for large-document analysis, agentic pipelines with custom tools, and tasks requiring the widest possible context. The preview status and moderate Intelligence Index score are trade-offs.

---

## Signature

- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-10
- Method: public internet research across Google DeepMind official pages, ChatlyAI, SmartScope, LayerLens, Artificial Analysis, and other benchmark aggregators; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.7_Plus.md`, using the same headings.
