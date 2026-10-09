# Kimi K2.5 — findings by DeepSeek 4.1 Flash

- Source: Moonshot AI / Kimi K2.5 (`moonshotai/kimi-k2.5`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.5
- **Short description:** Moonshot AI's open-weight natively-multimodal agentic model (released 2026-01-27), a 1T-parameter MoE with thinking/instant modes, an "Agent Swarm" multi-agent mode, and built-in coding-agent support. One of the stronger open-weight SWE/agent models of early 2026.
- **Provider / access:** Moonshot first-party / Fireworks / OpenRouter; OpenAI-compatible. OpenCode Zen `opencode/kimi-k2.5` (Chat Completions). Open weights (Modified MIT).
- **Release / knowledge:** 2026-01-27; knowledge cutoff not separately published.
- **IDs:** `moonshotai/kimi-k2.5`; `opencode/kimi-k2.5`.
- **Context window:** 256K native (262,144 per aggregators); MoonViT 400M vision encoder. Max output not separately published.
- **Modalities:** text, image and **video** in; text out. Reasoning (thinking + instant; interleaved multi-step tool calls); tools/agentic + Agent Swarm.
- **Pricing (as of 2026-10-09):** **$0.60 / $3.00 per 1M** with **$0.10 cached** (first-party/Fireworks; Zen $0.60/$3.00/$0.10). Paid; open weights self-hostable.
- **Architecture:** MoE, **1T total / 32B active**; 61 layers (1 dense), MLA attention, 384 experts (8 selected + 1 shared), 160K vocab; ~15T mixed vision+text training tokens atop Kimi-K2-Base. Modified MIT open weights.

### Raw benchmarks found

> Self-reported rows are the HF model card (thinking mode); independent rows are Vals AI / Artificial Analysis / BenchmarkList / Epoch.

Agent / tool use:

- Tau2-Bench Telecom: **95.9** (independent, AA/BenchmarkList)
- OSWorld(-Verified): **63.3** (independent)
- BrowseComp: **60.6** self / 74.9 with context-manage / 78.4 Agent Swarm
- CyberGym 41.3; PaperBench 63.5 (self)

Reasoning / knowledge:

- GPQA Diamond: **87.6** self / 87.37 eval / 84.1 (Vals) / 87.9 (Epoch)
- HLE-Full: **30.1** (50.2 with tools); AIME 2025 **96.1**
- MMLU-Pro: **87.1** self / 85.9 (Vals)
- ARC-AGI-1 65.3 / ARC-AGI-2 11.8 (independent); AA Intelligence Index 23 (est) — conflict: 35.37 (BenchmarkList aggregation)

Coding:

- SWE-bench Verified: **76.8** self / **70.0** (Vals); SWE-bench Pro 50.7; SWE Multilingual 73.0 / 67.3
- Terminal-Bench 2.0: **50.8** self / 40.4 (Vals); Terminal-Bench 2.1 45.7 (independent)
- LiveCodeBench v6: **85.0** self / 83.9 (Vals); SciCode 48.7; OJBench 57.4

Multimodal / long context:

- MMMU-Pro **78.5** self / 84.3 (Vals); MathVision 84.2; VideoMME 87.4; VideoMMMU 86.6; OCRBench 92.3
- LongBench v2 61.0; AA-LCR 70.0; no MRCR/RULER published

### Normalized scores (1–100)

- **Tool use: 78/100.** Tau2 Telecom 95.9, OSWorld 63.3 and Agent-Swarm BrowseComp 78.4 are strong; capped by a weak plain BrowseComp 60.6 and CyberGym 41.3.
- **Reasoning: 78/100.** GPQA 87.6%, AIME 96.1% and MMLU-Pro 87.1% are high; HLE 30.1% and a low ARC-AGI-2 11.8 keep it below frontier.
- **Context window: 72/100.** 256K-token window (200K–500K band, ~70–84); no ≥98%-at-512K retrieval benchmark published.
- **Multimodal: 80/100.** Text + image + **video** input (video band 75–90) with VideoMME 87.4 and MMMU-Pro 78.5; no audio.
- **Coding: 76/100.** SWE-bench Verified 70–77%, SWE Pro 50.7%, LiveCodeBench 84–85% are solid; independent Terminal-Bench 40.4–45.7 caps it.
- **Cost efficiency: 90/100.** $0.60/$3.00 per 1M with $0.10 cached (~"$0.60/$2.20" band); open weights allow self-hosting.
- **Overall Score: 77/100.** (78 + 78 + 72 + 80 + 76) / 5 = 76.8 → 77. Best fit: open-weight multimodal agentic coding with agent-swarm search; prefer K2.6/K3 for newer harnesses.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-09
- Method: public internet research, cross-checked across the Hugging Face model card, Vals AI, Artificial Analysis, BenchmarkList, Epoch and LLM Stats. Self-reported vs independent rows are labelled; the AA-Index conflict (23 vs 35) is surfaced. Normalized 1–100 interpretations, not vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
