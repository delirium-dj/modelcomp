# Qwen4-Max-Preview — findings by Step 5 Preview

- Source: Alibaba / Qwen Team (`qwen4-max-preview`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen4-Max-Preview
- **Short description:** Alibaba's next-generation Qwen4 flagship, released as a two-week Token-Plan-only preview (Nov 11–25, 2026) with a 1M-token context, image/video understanding and deep reasoning on by default — retired after the preview ends, with no pay-as-you-go price and no open weights.
- **Provider / access:** Alibaba Cloud Model Studio via Token Plan Personal/Team only (base URL `https://token-plan.ap-southeast-1.maas.aliyuncs.com`); also runnable in Qwen Chat, the Qwen App, QwenStudio, QwenWork and Qoder. Compatible with OpenAI Chat Completions + Responses and Anthropic Messages APIs. No OpenCode Zen / OpenRouter / models.dev listing found in fetched sources.
- **Release / knowledge:** Preview started 10:00 Nov 11, 2026, runs to 24:00 Nov 25, 2026 (UTC+8); "no changes will be made during this period, and the model will be retired after the preview ends" (official docs, last updated Nov 13, 2026). Knowledge cutoff not disclosed.
- **IDs:** `qwen4-max-preview` (official Model Studio ID). No per-token-priced public ID exists during the preview.
- **Context window:** 1,048,576 (1M) tokens context; max output 393,216 tokens, shared between thinking and the final answer (official docs).
- **Modalities:** Text, image and video in; text out. Thinking enabled by default with `reasoning_effort` low / medium / xhigh (xhigh default); function calling, web search, built-in tools, structured outputs (JSON Object / JSON Schema) supported.
- **Pricing (as of 2026-11-13):** No per-token price published — preview is accessible through the Token Plan subscription only (personal/team credits); pay-as-you-go not supported. Third-party coverage lists Token Plan entry from $3/month, but no metered $/1M figures are published for this model.
- **Architecture:** Proprietary hosted service (preview); no parameter counts or weights released.

### Raw benchmarks found

Agent / tool use:

- Latch (StealthMark cooperative-planning game, 5 levels): **67.3/100, rank 21/55, all 5 levels cleared** (independent third-party measurement, stealthmodels.com, 2026-11-11, run at default xhigh reasoning)
- Foresight (StealthMark anticipation game, 3 levels): **57.5/100, rank 14/54, survived 1 of 3 levels** (same source)
- Terminal-Bench 2.1 / 4.x / Tau3-Banking / Tau2-Bench / GDPval-AA / Claw-Eval / ClawProBench / Toolathon / MCP-Atlas / SWE Atlas Codebase QnA / SWE-bench Verified / SWE-sweep: no verified public score found (Alibaba published no benchmark scores at launch; absent from Artificial Analysis / Arena leaderboards per independent coverage).

Reasoning / knowledge:

- StealthMark General Intelligence: **54.6/100** (independent third-party, 2026-11-11)
- StealthMark reasoning efficiency: **single-step 51 (rank 20/56), multi-step 60 (rank 13/54)** — 50 = field average (same source; not part of the overall score)
- GPQA Diamond: no verified public score found.
- HLE: no verified public score found.
- LCR / MLCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found (a circulating "53 on Artificial Analysis" claim was checked and traced to no primary source).

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found.
- LiveCodeBench: no verified public score found.
- SciCode / AA-SciCode / Vibe Code Bench / DeepSWE / Coding Index: no verified public score found.
- Closest verified proxy: Latch 67.3/100 multi-level agentic planning (provisional, not a coding benchmark).

Long context:

- 1M-token context window documented (official docs); MRCR / RULER / GraphWalks retrieval scores: no verified public score found.

Multimodal:

- StealthMark Visual Intelligence: **66.3/100** (independent third-party, 2026-11-11)
- SVG-generation tasks (same source): Selfie **75.9** (rank 9/58), Pelican **77.3** (rank 7/58), Beach **78.4** (rank 5/58), Raccoon **71.0** (rank 10/58), Mona Lisa **55.2** (rank 12/58), Ground Truth **49.7** (rank 19/58), Newton's Mirror **48.8** (rank 9/58)
- Standard multimodal benchmarks (MMMU, MKA, Chartography): no verified public score found.

### Normalized scores (1–100)

- **Tool use: 72/100.** Above-median agentic execution on the only measured tasks — Latch 67.3 (all 5 cooperative-planning levels cleared) and Foresight 57.5 — plus above-average multi-step reasoning efficiency (60, rank 13/54); capped hard because no standard tool-use benchmark (Terminal-Bench, Tau, GDPval, MCP-Atlas) is published and the model is absent from every major leaderboard.
- **Reasoning: 72/100.** StealthMark General Intelligence 54.6 with reasoning efficiency above the field average at both single-step (51) and multi-step (60, rank 13/54) work; capped by zero published standard reasoning scores (GPQA/HLE/AA all "no verified public score found") and by trailing the predecessor Qwen3.8-Max-0902 (StealthMark 62.4 overall vs 58.8 for this preview).
- **Context window: 97/100.** 1M-token documented context with a 393,216-token output budget shared with thinking — top documented tier; capped only because no model-specific long-context retrieval benchmark (MRCR/RULER/GraphWalks) is published.
- **Multimodal: 78/100.** Text, image and video input with strong measured visual construction (StealthMark Visual Intelligence 66.3; Selfie 75.9, Pelican 77.3, Beach 78.4 rank top-10 of 58); capped by weak physical/light reconstruction (Ground Truth 49.7, Newton's Mirror 48.8), text-only output, and no standard multimodal benchmark.
- **Coding: 70/100.** No verified public coding benchmark exists for this ID — scored provisionally from the strongest adjacent evidence (Latch 67.3, all levels cleared; the model is marketed for coding, agents and frontend work); any standard SWE-bench/LiveCodeBench publication would move this score materially.
- **Cost efficiency: 60/100.** Entry via the Token Plan subscription (third-party coverage lists personal plans from $3/month, free daily use for individuals in the Qoder app) but no public per-token price is verifiable, pay-as-you-go is unavailable, and the model is retired after 2026-11-25 — price-to-performance cannot be confirmed, so this stays well below metered models with published $/1M rates.
- **Overall Score: 77.8/100.** Mean of Tool 72 + Reasoning 72 + Context 97 + Multimodal 78 + Coding 70 = 77.8; best fit: a strong 1M-context multimodal agent for Token-Plan subscribers during the preview window — not yet a provable price/performance pick before its retirement date.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-13 UTC
- Method: public internet research; web search was unavailable (HTTP 402), so per `RULES.md` § Web-research fallback I queried DuckDuckGo HTML directly, then fetched the official Alibaba Cloud Model Studio model page and the independent StealthMark benchmark page (primary spec + third-party measured scores, provenance labeled). Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass (markdown links to primary sources):
  - [Qwen4-Max-Preview — Alibaba Cloud Model Studio model page (official spec)](https://www.alibabacloud.com/help/en/model-studio/qwen4-max-preview)
  - [Qwen4-Max-Preview benchmark scores — StealthMark (independent measurement)](https://stealthmodels.com/benchmarks/models/qwen4-max-preview)
  - [Qwen 4 family guide, access + leak check — Stealth Models](https://stealthmodels.com/qwen-4)
  - [DuckDuckGo HTML query route used for discovery](https://html.duckduckgo.com/html/?q=Qwen4-Max-Preview+benchmarks)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.