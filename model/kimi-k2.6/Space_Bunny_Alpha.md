# Kimi K2.6 — findings by Space Bunny Alpha

- Source: Moonshot AI / `kimi-k2.6`
- Date: 2026-09-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.6
- **Short description:** Moonshot AI's GA release of its open-weight, natively
  multimodal agentic MoE, built for long-horizon coding, coding-driven design and
  swarm-based orchestration (up to 300 sub-agents / 4,000 coordinated steps).
  General-purpose sibling of the later `kimi-k2.7-code` and `kimi-k3`; K3 is
  Moonshot's flagship as of the 2026-07 model list.
- **Provider / access:** Moonshot AI platform (`https://api.moonshot.ai/v1`,
  Chat Completions, Anthropic-compatible endpoint offered); also OpenCode Zen
  (`opencode/kimi-k2.6`), OpenRouter (`moonshotai/kimi-k2.6`), Vercel AI Gateway,
  Azure/Fireworks/DeepInfra/Nebius and self-host via vLLM/SGLang/KTransformers
  (transformers >= 4.57.1).
- **Release / knowledge:** Released 2026-04-20 (GA 2026-04-21, after an 8-day
  preview); official knowledge cutoff not published.
- **IDs:** `kimi-k2.6` (Moonshot API), `moonshotai/Kimi-K2.6` (Hugging Face),
  `moonshotai/kimi-k2.6` (OpenRouter), `opencode/kimi-k2.6` (Zen). No free Zen
  ID found — cost scored on paid pricing.
- **Context window:** 262,144 tokens (262K), stated by Moonshot's own K2.6 pricing
  page and by Zen/OpenRouter/cloudprice mirrors. Secondary aggregators quote
  "128K" (kimi-k2.org landing copy), which is the older K2 base figure — trusting
  the vendor page. Max output reported as 262K on cloudprice and 235,929 on Kilo
  Code (route-specific caps). No independent long-context retrieval
  (MRCR/RULER/GraphWalks) measurement found.
- **Modalities:** text, image, video, PDF in; text out; reasoning (thinking and
  non-thinking modes); tool calls (ToolCalls, JSON mode, partial mode,
  automatic context caching); web search tool.
- **Pricing (as of 2026-09-30):** Moonshot list $0.95 in (cache miss) / $0.16 in
  (cache hit) / $4.00 out per 1M tokens; ¥6.50/¥27.00 CNY. Zen mirrors
  $0.95/$4.00 with $0.16 cache read; OpenRouter cheapest route $0.73/$3.49.
  No permanent free production tier (per Kimi's own pricing FAQ).
- **Architecture:** proprietary-vendor MoE, open weights under a **Modified MIT
  License** (commercial use permitted): 1.06T total parameters, 32B activated
  per token, 384 experts (8 routed + 1 shared), 61 layers, 7,168 attention
  hidden dim, 64 heads, MLA attention, 160K vocab. Native multimodal via a
  400M-parameter MoonViT vision encoder fused into the model.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0 (Terminus-2): **66.7%** (vendor model card; rank 10/48 on
  DataLearner mirror)
- Terminal-Bench 2.1: **53.56%** (BenchLM Vals mirror, July 2026 snapshot, rank
  29/45)
- Tau2: **1.0** (#15) per CloudPrice mirror; vendor card reports **Toolathlon
  50.0** vs GPT-5.4 54.6 / Opus 4.6 47.2 — note the τ² absolute mirror value is
  suspiciously perfect, so Toolathlon is the number to trust here
- MCPMark: **55.9** (vendor card) / **72.8 MCPMark-Verified** (DataLearner)
- MCP-Atlas: **69.4** (DataLearner, rank 30/41)
- Claw Eval: **62.3 pass^3 / 80.9 pass@3** (vendor card; Opus 4.6 = 70.4/82.4)
- OSWorld-Verified: **73.1%** (vendor card; rank 15/26)
- APEX-Agents: **27.9** (vendor card; GPT-5.4 33.3, Opus 4.6 33.0)
- BrowseComp: **83.2%** (no tools) / **86.3% agent swarm**; BrowseComp agent swarm
  beats GPT-5.4 78.4 and K2.5 74.9
- DeepSearchQA: **92.5 f1 / 83.0 accuracy**; WideSearch item-f1 **80.8**
- GDPval-AA: no verified public score found
- OpenClaw PinchBench (Kilo Code): **91.0% average**, #3/50, $0.010/run, 1m19s

Reasoning / knowledge:

- GPQA Diamond: **90.5%** (vendor card; rank 41/270 on DataLearner, GPT-5.4
  92.8, Opus 4.6 91.3, Gemini 3.1 Pro 94.3)
- HLE-Full: **34.7%** (no tools) / **54.0%** with tools — vendor card lists 54.0
  as the best HLE-with-tools score in its comparison set; GPT-5.4 52.1,
  Opus 4.6 53.0, Gemini 3.1 Pro 51.4
- AIME 2026: **96.4**; HMMT 2026 (Feb): **92.7**; IMO-AnswerBench: **86.0**
- LCR: **0.7** (#21, CloudPrice mirror); MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **53.9 (#7)** per CloudPrice;
  Opper AI mirrors **45 (#53/597)** — harness/baseline-set disagreement, both
  listed. Coding Index 47.1 (#15) / 62 per Opper — same disagreement
- Omniscience Accuracy / Hallucination Rate: no verified public score found
- LiveBench (thinking): **72.17** (rank 28/115)

Coding:

- SWE-bench Verified: **80.2%** (vendor card, agentic; Opus 4.6 80.8, Gemini 3.1
  Pro 80.6, K2.5 76.8)
- SWE-bench Pro: **58.6%** (vendor card, 17/60 on DataLearner; GPT-5.4 57.7,
  Opus 4.6 53.4, Gemini 3.1 Pro 54.2 — K2.6 leads this open-weights set)
- SWE-bench Multilingual: **76.7%**
- LiveCodeBench v6: **89.6%** (rank 9/127; Opus 4.6 88.8, Gemini 3.1 Pro 91.7)
- SciCode: **52.2%** (GPT-5.4 56.6, Gemini 3.1 Pro 58.9)
- OJBench (Python): **60.6%**
- Terminal-Bench 2.0: **66.7%** (as above)
- Vibe Code Bench: **37.89%** (BenchLM); cursorBench31 **47.6%**
- Kimi Code Bench 2.0 **50.9**; Program Bench **48.3**; MLS Bench **26.7**
- DeepSWE: no verified public score found (not run by the vendor on this card)

Long context:

- No MRCR / RULER / GraphWalks retrieval measurement published for K2.6.
  Vendor states 256K context with automatic compression; Kilo Code reports
  235,929 max output tokens on its route.

Vision (for the multimodal dimension):

- MMMU-Pro: **79.4**; MMMU-Pro w/ python **80.1**
- MathVision **87.4** / w/ python **93.2**; V* w/ python **96.9**
- CharXiv (RQ) **80.4** / w/ python **86.7**; BabyVision **39.8** / w/ python
  **68.5** (GPT-5.4 49.7/80.2, Opus 4.6 14.8/38.4)

### Normalized scores (1–100)

- **Tool use: 88/100.** The broadest verified agentic profile in the open-weights
  set — TB2.0 66.7%, Toolathlon 50.0 (above Opus 4.6's 47.2), Claw Eval pass^3
  62.3, MCP-Atlas 69.4, OSWorld-Verified 73.1, PinchBench 91.0% (#3/50) — and it
  leads its whole comparison group on SWE-bench Pro. Capped by TB2.1 dropping to
  53.56% on the stricter mirror, Toolathlon still trailing GPT-5.4 (50.0 vs 54.6),
  APEX-Agents at 27.9, and no verified GDPval-AA number at all.
- **Reasoning: 92/100.** GPQA Diamond 90.5% and AIME 96.4 / IMO 86.0 put it
  squarely in the frontier band, and HLE-Full 54.0 with tools leads the vendor's
  entire frontier comparison (GPT-5.4 52.1, Opus 4.6 53.0). Capped by HLE
  collapsing to 34.7 without tools, LCR only ~0.7, and the Artificial Analysis
  Intelligence Index disagreement (53.9 #7 vs 45 #53/597).
- **Context window: 72/100.** 262,144 tokens is vendor-documented and mirrored by
  Zen/OpenRouter/cloudprice, which lands it in the 200K–500K band. It stays in the
  lower half of that band because no independent long-context retrieval evidence
  (MRCR/RULER) was published at any window length, the ~1M-class sibling K3 exists
  and the vendor steers users there, and secondary landing copy still quotes the
  older 128K figure.
- **Multimodal: 82/100.** Native MoonViT vision encoder fused into the backbone
  (not bolted on), with verified text/image/video/PDF in and text out, plus solid
  measured vision results (MMMU-Pro 80.1 w/ python, V* 96.9, MathVision 93.2).
  Below the 90+ band because there is no audio input and no non-text output.
- **Coding: 90/100.** SWE-bench Verified 80.2% (statistically level with Opus 4.6
  and Gemini 3.1 Pro), SWE-bench Pro 58.6% — a genuine open-weights SOTA — plus
  LiveCodeBench v6 89.6 and SWE-bench Multilingual 76.7. Capped by SciCode 52.2
  (well below GPT-5.4's 56.6), OJBench 60.6, and Vibe Code Bench at only 37.89%.
- **Cost efficiency: 88/100.** Paid-only: $0.95 in / $4.00 out per 1M on Moonshot
  and Zen, with an unusually cheap $0.16 cache-read rate that real agent loops hit
  constantly (BenchLM estimates $0.249 per cache-heavy agent loop). No free tier
  exists, so it cannot reach 100, but it is materially cheaper than the $1.25/$4.25
  ~88 anchor at comparable quality.
- **Overall Score: 84.8/100.** Half-up mean of the five non-cost dims
  ((88 + 92 + 72 + 82 + 90) / 5 = 84.8). Best fit: an open-weights long-horizon
  coding-and-agent workhorse — pick it when SWE-bench Pro-grade repo-scale repair
  and 300-agent swarms matter and you want to self-host; step up to `kimi-k3` for
  1M context and to a frontier closed model for TB2.1-level terminal work.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-30
- Method: public internet research (vendor model card and Kimi platform pricing
  docs, Hugging Face card, BenchLM, CloudPrice, DataLearner, Kilo Code leaderboard,
  Opper AI, OpenCode Zen pricing mirrors); scores are normalized 1–100
  interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Kimi_K3.md`, using the
  same headings.