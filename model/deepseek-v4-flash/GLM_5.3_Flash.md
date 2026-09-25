# DeepSeek V4 Flash — findings by GLM 5.3 Flash

- Source: DeepSeek (`deepseek-v4-flash`, MIT open weights; 0731 production checkpoint)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Flash (0731 checkpoint)
- **Short description:** DeepSeek's cost- and speed-optimized V4-family variant — a 284B-total / 13B-active MoE with a 1M-token context under a fully permissive MIT license; the cheapest frontier-class API model in its era, inheriting V4-era instruction-following and reasoning from the same training lineage as V4 Pro. Targets high-volume, latency-sensitive and agentic-coding-at-scale workloads.
- **Provider / access:** DeepSeek API (`deepseek-v4-flash`, OpenAI-compatible Chat Completions; native Responses API and Codex support per genztech); 15 providers on OpenRouter (`deepseek/deepseek-v4-flash`); MIT weights on Hugging Face for self-hosting (4-bit ~160–175GB VRAM). No Free ID on OpenCode Zen.
- **Release / knowledge:** Released 2026-04-24; 0731 checkpoint (2026-07-31) is the production-stable snapshot; peak/off-peak pricing since 2026-08-16; knowledge cutoff not verified.
- **IDs:** `deepseek-v4-flash` (DeepSeek API); `deepseek/deepseek-v4-flash` (OpenRouter). No Free ID on Zen.
- **Context window:** 1,000,000 total tokens (1,048,576; max output 384,000 per OpenRouter — verified via OpenRouter and zenmux).
- **Modalities:** text input; text output; reasoning yes (standard mode plus a dedicated extended-reasoning mode with longer internal deliberation); tool calls (OpenAI-compatible function calling); JSON mode.
- **Pricing (as of 2026-09-24):** $0.14 / $0.28 per 1M in/out official list (zenmux); OpenRouter $0.0886 / $0.1772; subject to DeepSeek's peak/off-peak restructure since 2026-08-16 (off-peak ~half of peak). Open MIT weights; paid API.
- **Architecture:** 284B total / 13B active parameters (Mixture-of-Experts, sparse activation), MIT license.

### Raw benchmarks found

Agent / tool use:

- Toolathlon Verified: **70.3** (vendor comparison table for the 0731 checkpoint, cited by DataCamp's Qwen3.8-Flash-Next analysis; vs Qwen3.8-Flash's 73.5)
- Terminal-Bench, Tau3-Banking/Tau2-Bench, GDPval-AA, MCPAtlas, Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **88.1%** (zenmux analysis; DataCamp's comparison table lists 90.8 for the 0731 checkpoint)
- HLE: **33.8** (DataCamp comparison table for 0731)
- AIME: competitive in standard mode (zenmux; exact figure not published in the sources consulted)
- LiveCodeBench: **90.6** (DataCamp comparison table for 0731)
- Artificial Analysis Intelligence Index: **50** (zenmux citing AA; mid-tier bracket)
- LCR / MLCR, CritPt: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified: **79.0%** (zenmux; a conflicting 88.8% figure from genztech.blog under a different setup — treat the lower controlled-setup figure as the reliable one)
- SWE-bench Pro: **56.0** (DataCamp comparison table for 0731)
- LiveCodeBench: **90.6** (as above)
- DeepSWE 1.1: **54.4** (DataCamp comparison table for 0731)
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- No long-context retrieval value verified; zenmux's hands-on testing observed degraded coherence on long-document synthesis requiring cross-referencing across a large window (even within the stated 1M limit)

### Normalized scores (1–100)

- **Tool use: 70/100.** Toolathlon Verified 70.3% is just above the mid band and single-agent scaffolds are reliable; complex multi-agent orchestration with deep dependency chains is the documented weak surface, and no Terminal-Bench/Tau3/GDPval numbers were found.
- **Reasoning: 82/100.** GPQA Diamond 88.1–90.8% sits at the 90% frontier reference and LiveCodeBench 90.6% is strong, but HLE 33.8% stays under the 40% bar and no AIME figure was published; those gaps cap it.
- **Context window: 92/100.** 1M tokens maps to the ≥1M tier (95–100) but hands-on testing found degraded long-document coherence at the far end of the window, docking it below 95.
- **Multimodal: 15/100.** Text-only in/out per available evidence — no vision/audio/video input.
- **Coding: 85/100.** SWE-bench Verified 79.0% (controlled-setup figure; a conflicting 88.8% exists under a different harness), SWE-bench Pro 56.0%, LiveCodeBench 90.6% and DeepSWE 54.4% are strong; the SWE-figure conflict and missing SciCode prevent 90+.
- **Cost efficiency: 97/100.** $0.14/$0.28 per 1M (OpenRouter $0.089/$0.177) sits in the ~$0.10/$0.20 = 97–99 methodology band; free MIT weights as an extra cost lever.
- **Overall Score: 69/100.** Mean of the five quality dims (70 + 82 + 92 + 15 + 85) / 5 = 68.8 → 69. Best-fit: the budget workhorse for high-volume coding pipelines, RAG and batch workloads where cost per token trumps frontier reasoning — not for deep multi-agent orchestration or the hardest reasoning.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-09-24
- Method: public internet research (zenmux.ai benchmark analysis, DataCamp comparison tables, OpenRouter listing, DuckDuckGo web search); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `DeepSeek_4.md`, using the same headings.
