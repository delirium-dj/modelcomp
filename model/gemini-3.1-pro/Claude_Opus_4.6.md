# Gemini 3.1 Pro — findings by Claude Opus 4.6

- Source: Google DeepMind / Gemini 3.1 Pro
- Date: 2026-09-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro
- **Short description:** Google DeepMind's frontier reasoning model released February 2026, featuring a multi-tier thinking architecture (Low/Medium/High/Max) and natively multimodal capabilities. Positioned as a top-tier model for complex reasoning, scientific knowledge, and large-scale code comprehension.
- **Provider / access:** Google AI Studio, Vertex AI, OpenRouter (`google/gemini-3.1-pro`). Chat Completions and Responses API.
- **Release / knowledge:** 2026-02-19 release; knowledge cutoff not publicly specified but estimated late 2025 / early 2026.
- **IDs:** `google/gemini-3.1-pro` (no Free ID on Zen)
- **Context window:** 1,048,576 tokens input / 65,536 tokens max output — verified via Google DeepMind technical report and OpenRouter docs.
- **Modalities:** Text, image, audio, video, PDF, code in; text out; extended thinking (multi-tier reasoning); tool calls; JSON mode.
- **Pricing (as of 2026-09-21):** $2.00 / $12.00 per 1M tokens (input / output); no free tier. Pricing via Google AI Studio and Vertex AI.
- **Architecture:** Transformer-based Mixture-of-Experts (MoE); proprietary; parameter counts not publicly disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **68.5%** (source: Google DeepMind technical report)
- Tau2-Bench (Retail): **90.8%** (source: Google DeepMind technical report)
- Tau2-Bench (Telecom): **99.3%** (source: Google DeepMind technical report)
- GDPval-AA: **1317 Elo** (source: Google DeepMind technical report)
- Tau3-Banking: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **94.3%** (source: Google DeepMind technical report)
- HLE: **44.4%** (full set, text + multimodal, no tools; source: Google DeepMind report)
- ARC-AGI-2: **77.1%** (source: Google DeepMind / blog.google)
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found for this exact model
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified: **80.6%** (single attempt; source: Google DeepMind technical report)
- LiveCodeBench Pro: **2887 Elo** (source: Google DeepMind report)
- SciCode: **58.9%** (source: industry reviews / benchmarklist)
- Vibe Code Bench: **32.5%** (source: industry reviews / benchmarklist)
- DeepSWE: no verified public score found for Gemini 3.1 Pro specifically
- SWE-Pro: no verified public score found

Long context:

- 1M token context window confirmed. No published MRCR / RULER / GraphWalks retrieval accuracy scores found for Gemini 3.1 Pro specifically.

### Normalized scores (1–100)

- **Tool use: 82/100.** TB2.0 68.5% is solidly mid-to-high range (frontier ~88%+); Tau2-Retail 90.8% and Telecom 99.3% are excellent; GDPval 1317 is mid-high (frontier ~1750+). Missing Tau3/Claw-Eval prevents higher scoring. Capped by TB2.0 gap to frontier and missing Tau3 data.
- **Reasoning: 93/100.** GPQA Diamond 94.3% is near-best-in-class; HLE 44.4% is strong (frontier ~48%+); ARC-AGI-2 77.1% demonstrates exceptional abstract reasoning. Capped only by HLE gap to absolute frontier and missing LCR/MRCR data.
- **Context window: 97/100.** 1M token input confirmed, placing it in the ≥1M tier (95–100). No published retrieval accuracy scores to confirm ≥98% at 512K+, so slight deduction from 100. 65K max output noted as caveat.
- **Multimodal: 80/100.** Natively processes text, image, audio, video, and PDF input — strong multi-input coverage. Text-only output. Scores above +video/PDF tier (75–90) due to audio support but below audio/non-text output tier.
- **Coding: 85/100.** SWE-bench Verified 80.6% is strong (frontier ~80%+); SciCode 58.9% is above-mid (frontier ~58%+); Vibe Code Bench 32.5% is low but this benchmark is challenging for all models. LiveCodeBench Elo 2887 is competitive. Capped by Vibe Code Bench and missing DeepSWE data.
- **Cost efficiency: 55/100.** $2.00/$12.00 per 1M tokens is premium pricing. Using the methodology: ~$3/$15 range scores ~60, adjusted down slightly for $12 output cost. No free tier available.
- **Overall Score: 87/100.** Mean of five quality dims: (82 + 93 + 97 + 80 + 85) / 5 = 87.4 → 87. Best-fit: frontier reasoning and scientific knowledge tasks requiring large context; premium pricing limits cost-sensitive deployments.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6)** — 2026-09-21
- Method: public internet research (Google DeepMind technical reports, blog.google, OpenRouter, industry benchmark trackers); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3.6_Flash.md`, using the same headings.
