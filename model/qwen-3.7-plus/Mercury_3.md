# Qwen3.7-Plus — findings by Mercury 3

- Source: Alibaba/Qwen (Qwen3.7-Plus)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.7-Plus
- **Short description:** Alibaba Qwen team's multimodal, budget-priced sibling of Qwen3.7-Max (released May 2026): text/image/video input with a 1M-token context, full-stack agentic intelligence, and frontier-tier GUI grounding — at roughly one-sixth of Max's price. API-only and proprietary (no open weights).
- **Provider / access:** Alibaba Cloud Model Studio API (`qwen3.7-plus`; snapshot `qwen3.7-plus-2026-05-26`), OpenAI-compatible endpoint; also via OpenRouter/third-party providers (8 providers). No self-hosting — closed weights.
- **Release / knowledge:** Released May 2026 (snapshot dated 2026-05-26); knowledge cutoff not published.
- **IDs:** `alibaba/qwen3.7-plus`.
- **Context window:** 1M tokens total (max input 991,808; thinking mode 983,616; max output 131,072; CoT max 262,144). Visual tokens share the 1M budget.
- **Modalities:** text + image + video input; text output; reasoning model; function calling; structured outputs; web search; context caching; GUI grounding (pixel-coordinate action plans); no audio input or image/video output.
- **Pricing (as of 2026-10):** China $0.276 in / $1.101 out per 1M (implicit cache $0.056); international (SG/US) $0.40/$1.60 (cache $0.08); >256K input tier ~3x ($0.826/$3.301, cache $0.166); batch discounts available.
- **Architecture:** proprietary (parameters undisclosed).

### Raw benchmarks found

Agent / tool use:

- ScreenSpot Pro (GUI grounding): **79.0** (Qwen/early hands-on) — frontier-tier; Max cannot run this eval
- MCP-Atlas: **76.4** (Qwen) — tie with Qwen3.7-Max
- Terminal-Bench: **70.3** (Qwen) — slightly ahead of Max (69.7)
- Autonomous run ceiling: 35 hours (Qwen)

Reasoning / knowledge:

- LM Arena: **#15 text** / **#12 coding** (slightly behind Max at #13/#10)
- Vals AI (independent runs, Alibaba API): CorpFin v2 **62.01%**, Finance Agent v2 **41.25%** — trailing Qwen3.7-Max
- No standalone AA Intelligence Index figure captured at research time; AA maintains a profile page

Coding:

- SWE-Bench Pro: **~60%** (Qwen/early hands-on) — essentially level with Max (60.6%)
- Terminal-Bench: 70.3% (see above)

Long context:

- 1M-token window verified on official page; no independent long-context retrieval benchmark found for Plus

### Normalized scores (1–100)

- **Tool use: 87/100.** MCP-Atlas 76.4, Terminal-Bench 70.3, and ScreenSpot Pro 79.0 (frontier GUI grounding) make it a strong agentic/multimodal tool model; numbers are vendor/early-review sourced, which caps confidence.
- **Reasoning: 84/100.** Slightly behind Qwen3.7-Max on text (LM Arena #15); independent finance evals (CorpFin v2 62.01%, Finance Agent v2 41.25%) trail Max; no independent index score captured.
- **Context window: 92/100.** 1M tokens (shared across modalities) verified; >256K tier is billed at ~3x.
- **Multimodal: 80/100.** Text+image+video input with strong visual-agent behavior (screenshot→pixel coords); text-only output, no audio input confirmed.
- **Coding: 85/100.** SWE-Bench Pro ~60% and Terminal-Bench 70.3% — Max-level text coding at a fraction of the price; not frontier-leading.
- **Cost efficiency: 82/100.** $0.276–0.40/$1.10–1.60 with cheap caching — ~1/6 of Max's price for comparable text plus vision; API-only (no free tier, no open weights) balances the value.
- **Overall Score: 86/100.** Mean of the five non-cost dims (87+84+92+80+85)/5 = 85.6 → 86. Best-fit: cheapest frontier-tier multimodal agent model of mid-2026 for computer-use/GUI and screenshot-driven work; closed weights are the main trade-off.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-06
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Alibaba Cloud Model Studio: qwen3.7-plus model page (specs, limits, pricing)](https://www.alibabacloud.com/help/en/model-studio/qwen3-7-plus)
  - [Qwen blog: Qwen3.7-Plus announcement](https://qwen.ai/blog?id=qwen3.7-plus)
  - [Apidog: Qwen 3.7 Plus — multimodal agent model, benchmarks, pricing](https://apidog.com/blog/qwen-3-7-plus/)
  - [BuildFastWithAI: hands-on review](https://www.buildfastwithai.com/blogs/qwen-3-7-plus-multimodal-agent-review-2026)
  - [Artificial Analysis: Qwen3.7-Plus profile](https://artificialanalysis.ai/models/qwen3-7-plus)
  - [Vals AI: Qwen3.7-Plus finance benchmarks](https://www.vals.ai/models/alibaba_qwen3.7-plus)
  - [OpenRouter: Qwen3.7-Plus](https://openrouter.ai/qwen/qwen3.7-plus)
- Future sources: add a new file next to this one using the same headings.
