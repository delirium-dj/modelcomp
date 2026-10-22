# GLM-5.3-Flash-X - findings by Big Pickle

- Source: OpenCode (`opencode/big-pickle`)
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3-Flash-X
- **Short description:** High-speed serving variant of Z.ai's GLM-5.3-Flash (same 320B/18B hybrid MoE family),
  optimized for lower latency/higher throughput at the cost of higher per-token price. The "X"
  lane is an inference-speed variant, not a larger model.
- **Provider / access:** Z.ai API (`glm-5.3-flashx`), also surfaced via OpenRouter/Vercel/Model Studio
  providers; present in many gateways but **not listed in the live OpenCode Zen catalogue**
  (checked 2026-10-22 — Zen shows `glm-5.3-flash-free`, `glm-5.3`, `glm-5.1`, `glm-5.2`,
  `glm-5.3`, `glm-5.3-flash`; no `glm-5.3-flashx`).
- **Release / knowledge:** Released **2026-09-18** (announced as the speed-optimized
  variant of GLM-5.3-Flash; GLM-5.3-Flash itself launched 2026-08-26). Knowledge cutoff not
  publicly specified by vendor.
- **IDs:** `glm-5.3-flashx` (Z.ai), `z-ai/glm-5.3-flashx` (OpenRouter/Vercel), `ZHIPU/GLM-5.3-FlashX`
  (Model Studio). Sibling: `glm-5.3-flash` (cheaper Flash lane).
- **Context window:** **1,000,000 / 1,048,576 tokens** (1M). Max output **128,000 / 131,072
  tokens** depending on provider docs (e.g. Z.ai docs 128K, some providers 131K).
- **Modalities:** Input **text, image, video, file**; output **text**. Function/tool calling,
  structured outputs, reasoning (thinking always on; supports effort levels low/high/max),
  interleaved and preserved thinking (with correct return of reasoning_content), prefix
  completion, context caching.
- **Pricing (as of 2026-10-22):** **$0.37 input / $0.075 cached / $1.25 output per 1M tokens**
  (Z.ai pricing page, consistent across providers). This is **~2.5×** the price of GLM-5.3-Flash
  ($0.15/$0.03/$0.50), while offering higher throughput/latency tradeoffs reported by users.
- **Architecture:** 320B total parameters, **18B active** (MoE); hybrid sparse + linear
  attention, mHC, IndexPool for long-context efficiency. Natively multimodal.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **84.3%** (Z.ai blog, GLM-5.3-Flash family figure; GLM-5.3-FlashX is the speed
  variant of the same family; direct per-id evals are sparse).
- Toolathlon Verified: **78.4%** (family figure).
- AutomationBench v1.0.6: **48.8%** (family figure).
- SWE-bench Pro / Agents' Last Exam / APEX-Agents: reported for the Flash family; no
  GLM-5.3-FlashX-specific independent sweep was found.
- No verified public scores for BrowseComp, OSWorld, MCP-Atlas, Tau3/Tau2 in standalone
  GLM-5.3-FlashX listings.

Reasoning / knowledge:

- GPQA Diamond: **90.2%** (AnotherWrapper family listing for GLM-5.3-Flash; FlashX is the
  speed lane of the same base/family with no separate published GPQA).
- HLE w/ tools: **55.3%** (family figure).
- LiveBench / MMLU-Pro / others appear in aggregator summaries but are not consistently
  broken out per FlashX with full provenance.
- AIME 2025: **93.9%** (family figure).

Coding:

- DeepSWE v1.1: **63.4%** (family figure).
- LiveCodeBench: **80.5%** (family figure).
- Terminal-Bench 2.1: **84.3%**.
- SWE-bench Verified: **92%** (family figure); SWE-bench Pro: **50.1%** (TrustTheBench
  aggregation for FlashX in places) but provenance varies.
- Vibe Code Bench: **30.8%** (family figure).

Long context:

- 1M token context window with 128K/131K max output. Architecture designed for long context
  (hybrid attention, IndexPool). RULER/OpenAI-MRCR appear in some aggregator listings but
  numbers are inconsistent across sources; no definitive public retrieval score found that is
  unambiguously tied to GLM-5.3-FlashX vs GLM-5.3-Flash.

### Normalized scores (1-100)

- **Tool use: 72/100.** Toolathlon 78.4% and strong agentic family results suggest decent
  tool use; but GLM-5.3-FlashX is primarily marketed as a speed lane and there is no
  FlashX-specific BrowseComp/OSWorld/MCP-Atlas row, and many "tool use" figures are for the
  cheaper GLM-5.3-Flash, not this pricier variant.
- **Reasoning: 74/100.** GPQA 90.2% and AIME 93.9% (family figures) are strong for the Flash
  tier, HLE w/tools 55.3% is solid; without FlashX-specific published numbers, we credit the
  family but with some uncertainty discount.
- **Context window: 95/100.** 1M context with hybrid attention architecture is near the top of
  the band; max output 128K/131K is generous. Some providers note 1M window but no published
  needle-retrieval score clearly tied to FlashX.
- **Multimodal: 82/100.** Natively multimodal (text/image/video/file in, text out) with
  visual coding capabilities. Family scores in vision/agentic benchmarks are decent (e.g.
  OSWorld family figures) but there are no FlashX-specific MMMU/CharXiv rows in the sources
  we found; credit is appropriate but not to the very top.
- **Coding: 80/100.** DeepSWE 63.4%, LiveCodeBench 80.5%, Terminal-Bench 2.1 84.3%
  (family figures) show a strong coding profile for the Flash tier; approaching Opus-level in
  Z.ai's own comparisons. FlashX is the speed variant, likely same capability as Flash.
- **Cost efficiency: 58/100.** $0.37/$0.075/$1.25 is **2.5×** more expensive than GLM-5.3-Flash
  ($0.15/$0.03/$0.50) for essentially the same model family/capability; throughput gains
  (users report ~130-170 tps vs ~30-70 for Flash in practice) may justify for interactive
  use, but price/performance is worse than the cheaper Flash lane. No free tier on many
  gateways.
- **Overall Score: 80.6/100.** A capable 1M multimodal model with strong coding/reasoning for the
  Flash tier, but it's a speed-optimized lane at ~2.5× the price of GLM-5.3-Flash with no
  FlashX-specific benchmark breakout in most public sources and no listing on OpenCode Zen.
  Treat as GLM-5.3-Flash-equivalent capability with a latency tax.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** - 2026-10-22
- Method: public research across vendor docs (Z.ai pricing and GLM-5.3-Flash/FlashX pages),
  third-party gateways (OpenRouter/Vercel/Model Studio/Alibaba Cloud), aggregators
  (AnotherWrapper, TrustTheBench, ModelBank, OpenRouter comparison), and community reports
  (Linux.do threads noting ~2.5× price vs Flash and higher throughput). Confirmed
  OpenCode Zen catalogue (no `glm-5.3-flashx` id) vs presence elsewhere. Identity: Ox Alpha
  was GLM-5.3-Flash (confirmed by Z.ai), Flash-X is the high-speed serving variant of the
  same family. Most benchmark numbers are for GLM-5.3-Flash (family) because FlashX has no
  dedicated published eval set; we explicitly note this and discount certainty accordingly.
- Future sources: add a file next to this one if FlashX gets dedicated benchmarks; do not
  fabricate per-variant scores.
