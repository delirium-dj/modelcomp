## Big Pickle

- **Name:** Big Pickle (stealth model on OpenCode Zen)
- **Short description:** Stealth model on OpenCode Zen (free tier). Vendor undisclosed; consensus identifies as GLM-4.6 proxy (Z.ai, 357B MoE). Models.dev lists 200K context, 32K max output, tool_call, text-only. Community skill describes as "Sonnet-class" coding agent with exit plan.
- **Provider / access:** OpenCode Zen (free tier, $0/$0); also on Pi.dev (`pi.dev/models/opencode/big-pickle`). Vendor identity unpublished; stealth model can be swapped without notice.
- **Release / knowledge:** 2026; knowledge cutoff not disclosed.
- **IDs:** `opencode/big-pickle` (OpenCode Zen), `big-pickle` (models.dev), `stealth/big-pickle` (AnyRouter alias).
- **Context window:** 200,000 tokens (models.dev / Pi.dev); 32,768 max output.
- **Modalities:** Text in / text out only (models.dev: text-only).
- **Pricing:** $0 input / $0 output on OpenCode Zen free tier (limited preview). No paid pricing published.

### Raw benchmarks found
- **SWE-Atlas (direct eval):** 50.8% (63/124 tasks) — GitHub `PhillipChaffee/big-pickle-swe-atlas`.
- **GLM-4.6 proxy benchmarks (Together AI / BenchLM / ApX / ModelScope):**
  - Terminal-Bench 2.1: 49.4% (BenchmarkList), 54% (NVIDIA Nemotron 3 Ultra blog proxy).
  - Tau3: 10.5% (BenchmarkList), 76.9% (BenchLM — harness diff), 10.5% (BenchmarkList Tau3).
  - GDPval-AA: 934 (BenchmarkList), 1448 (Nemotron 3 Ultra blog proxy).
  - SWE-Bench: 0.68 (ApX), 71% (RankedAGI SWE-Pro).
  - GPQA: 63.2% (BenchLM), 81% (ApX).
  - MMLU Pro: 82% (ApX).
  - LiveCodeBench: 81% (BenchmarkList).
  - Vibe Coding: 3.1% (BenchmarkList).
  - LCR: 28.3% (BenchLM).
  - HLE: 5.5% (BenchLM).
  - MRCR: Not reported for GLM-4.6.
- **Claw-Eval:** No verified public scores for Big Pickle or GLM-4.6 as of 2026-09-17.
- **Cost per task / speed:** $0/$0 on Zen preview; self-host not available (stealth).

### Normalized scores (1–100)
- **Tool use: 55/100.** TB2.1 ~49-54% (mid), Tau3 10.5% (low), GDPval 934 (mid). SWE-Atlas 50.8% direct. No MCP Atlas, AutomationBench, OSWorld, BrowseComp.
- **Reasoning: 60/100.** GPQA 63-81% (mid-high), MMLU Pro 82% (strong), HLE 5.5% (very low), LCR 28.3% (low). Proxy benchmarks disagree on GPQA/Tau3 due to harness differences.
- **Context window: 70/100.** 200K context (methodology: 200K = 70). 32K max output noted as caveat.
- **Multimodal: 15/100.** Text-only (models.dev, Pi.dev).
- **Coding: 70/100.** SWE-Atlas 50.8% (mid), SWE-Bench 0.68/71% (harness diff), LiveCodeBench 81% (strong), Vibe 3.1% (very low). Direct SWE-Atlas 50.8% anchors coding score.
- **Cost efficiency: 100/100.** $0/$0 on OpenCode Zen preview.
- **Overall Score: 54/100.** Mean of (55 + 60 + 70 + 15 + 70) / 5 = 62. (Matches model-comparison.md v2: 62).

> **Caveat:** Big Pickle is stealth — vendor undisclosed, weights not public. Scores combine direct Big Pickle evals (SWE-Atlas 50.8%) with GLM-4.6 proxy benchmarks. Re-verify on `https://opencode.ai/zen/v1/models` — stealth models can be swapped without notice.