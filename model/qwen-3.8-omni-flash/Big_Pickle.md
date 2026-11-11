# Qwen 3.8 Omni Flash — findings by Big Pickle

- Source: Alibaba/Qwen 3.8 Omni Flash
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Omni Flash
- **Short description:** Alibaba's native omnimodal Flash-tier model (Qwen team), ingesting text, image, audio and video in one 1M-token window for high-throughput productivity, GUI/agent work and visual reasoning. A separate `qwen3.8-omni-flash-realtime` sibling is served over WebSocket/WebRTC; its latency figures are not attributed to this row.
- **Provider / access:** Alibaba Cloud Model Studio and the Qianwen AI Platform (`qwen3.8-omni-flash`), OpenAI-compatible Chat Completions and Responses APIs; also proxied through OpenCode Zen as the Qwen3.8 Flash family.
- **Release / knowledge:** Released 2026-09-18 (Qwen launch post); knowledge cutoff not published.
- **IDs:** `qwen/qwen-3.8-omni-flash` (upstream `qwen3.8-omni-flash`); no Zen Free ID.
- **Context window:** 1,000,000 total / 131,072 max output (Alibaba Cloud Model Studio; BenchLM spec sheet confirms 1M).
- **Modalities:** text + image + audio + video in; text out; reasoning yes (`reasoning_effort` low/medium/xhigh, default xhigh); tool calls and structured outputs supported.
- **Pricing (as of 2026-11-11):** $0.15 / $0.47 per 1M in/out; cached input $0.016 (Alibaba Cloud Model Studio; OpenCode Zen lists the same $0.15/$0.47 with $0.016 cache read).
- **Architecture:** proprietary, hosted only; parameters not disclosed and no weights published.

### Raw benchmarks found

All rows below are Qwen's own launch-post numbers as mapped by BenchLM's exact-value snapshot (19 source-linked rows, not leaderboard-ranked).

Agent / tool use:

- CoWorkBench (in-house): **75.3%**
- AndroidWorld: **87.1%**
- Terminal-Bench 2.1 / 4.0, Tau2/Tau3, GDPval-AA, OSWorld, Claw-Eval, Toolathon, MCP-Atlas: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: **91.0%**
- HLE: **36.5%** (GPT-4o-judged; no-tools setting not stated)
- IFBench: **81.5%**
- AA Intelligence Index / BenchLM overall rank: **not publicly ranked** (BenchLM excludes the profile until non-generated coverage is sufficient); AA has no page for this ID.

Coding:

- SWE-bench Pro: **63.3%**
- DeepSWE 1.1: **57.8%**
- SWE Multilingual: **80.5%**
- NL2Repo-Bench: **48.9%**
- LiveCodeBench v6: **92.6%**

Multimodal:

- CharXiv Reasoning: **91.4%** with tools / **83.5%** without tools
- MathVision: **91.8%** plain / **96.2%** with Python
- RealWorldQA: **87.7%**
- ERQA: **71.0%**
- LVBench: **76.9%**
- Vision2Web: **62.9%**

Long context:

- No MRCR / RULER / GraphWalks retrieval score reported for the 1M window; the long-context claim is unmeasured in public benchmarks.

### Normalized scores (1–100)

- **Tool use: 78/100.** AndroidWorld 87.1% and CoWorkBench 75.3% are strong GUI/agent signals, but there is no Terminal-Bench, Tau2, GDPval or OSWorld row — a thin agentic evidence base caps the score.
- **Reasoning: 78/100.** GPQA Diamond 91.0% is frontier-adjacent and IFBench 81.5% is solid, but HLE 36.5% is well below the 70%+ frontier band and no AA Index exists.
- **Context window: 93/100.** 1M-token tier with 131K output; capped below 95 because no public retrieval-at-length measurement backs the window.
- **Multimodal: 92/100.** Native text + image + audio + video input with top-of-band evidence (CharXiv 91.4%, MathVision 96.2% with Python, LVBench 76.9%); text-only output keeps it out of the very top.
- **Coding: 82/100.** LiveCodeBench v6 92.6% and SWE Multilingual 80.5% are strong, but SWE-bench Pro 63.3%, DeepSWE 57.8% and NL2Repo 48.9% trail the frontier coding band.
- **Cost efficiency: 96/100.** $0.15/$0.47 per 1M with $0.016 cached input is near the $0.10/$0.20 ≈ 97–99 anchor; only the $0.47 output rate keeps it a point or two below.
- **Overall Score: 85/100.** (78 + 78 + 93 + 92 + 82) / 5 = 84.6 → 85. Best fit: high-throughput omnimodal ingestion — long video/audio analysis, GUI automation and document vision — at Flash pricing.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-11-11
- Method: public web research (Qwen 3.8 Omni Flash launch post via BenchLM's exact-value ledger, Alibaba Cloud Model Studio model/pricing pages, OpenCode Zen price table); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [BenchLM — Qwen 3.8 Omni Flash](https://benchlm.ai/models/qwen3-8-omni-flash)
  - [Alibaba Cloud Model Studio — models and pricing](https://www.alibabacloud.com/help/en/model-studio/models)
  - [OpenCode Zen — model list and pricing](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Omni_Flash_Update.md`, using the same headings.
