# Grok 4 — findings by Space Bunny Alpha

- Source: xAI (`grok-4-0709`, aliases `grok-4`, `grok-4-latest`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4 (July 2025 launch snapshot `grok-4-0709`)
- **Short description:** xAI's July 2025 flagship, superseded by Grok 4.1 / 4.2 / 4.3 / 4.6
  and **retired from the xAI API on 2026-05-15**. Kept as a historical reference point.
- **Provider / access:** **Retired.** xAI's migration guide retired `grok-4-0709` (and
  `grok-4-fast-*`, `grok-4-1-fast-*`, `grok-code-fast-1`, `grok-3`) from the xAI API
  effective **2026-05-15 12:00 PT**; the slug still resolves but is **redirected to
  `grok-4.3` with low reasoning effort**, so callers silently get a different model at a
  different price. **New in this revision** — the prior report said only that "current
  documentation does not expose a Grok 4 model page". Oracle Cloud also marks `xai.grok-4`
  **deprecated 2026-05-15, retired 2026-08-15**.
- **Release / knowledge:** released **2025-07-09** (xAI launch; Artificial Analysis states
  July 10, 2025). No reliable knowledge cutoff was found.
- **IDs:** `grok-4-0709` (snapshot); aliases `grok-4`, `grok-4-latest`. Both aliases now
  redirect to `grok-4.3`.
- **Context window:** **256,000 tokens** (xAI `grok-4-0709` model page and the xAI docs
  overview both list 256k; Oracle likewise). **Changed: the prior revision recorded 128K
  from an aggregator catalog — that figure is wrong.** xAI applies a higher price tier
  above 128K. Maximum output not verified.
- **Modalities:** **Text and image input, text output** (xAI docs and Oracle both confirm
  vision; xAI noted image generation "coming soon" and it never shipped for this snapshot).
  **Function calling, structured outputs, and reasoning are all supported** — the prior
  revision's "non-reasoning" classification was wrong. Functionality: the `reasoning_effort`
  parameter is rejected for Grok 4.
- **Pricing (as of 2026-09-29, historical):** **$3.00 / 1M input, $0.75 / 1M cached input,
  $15.00 / 1M output**; $18.00 blended per 1M, and $4.20 on AA's 7:2:1 cache-hit blend.
  **New in this revision** — the prior report recorded no verified rate. Post-retirement
  redirect traffic is billed at `grok-4.3` rates of $1.25 in / $2.50 out.
- **Speed / latency:** **no verified figure.** AA shows N/A ("Unknown out of 4 units for
  Speed") because the model is withdrawn from first-party serving.
- **Architecture:** Proprietary; parameter count not disclosed by xAI.
- **Deprecation:** **Hard retirement date 2026-05-15 on the xAI API**, replaced by
  `grok-4.3`; Oracle retires `xai.grok-4` on **2026-08-15**. Both dates have now passed.

### Raw benchmarks found

Agent / tool use:

- Gert Labs Composite Game Benchmark: **42.34** (BenchLM, exact benchmark source; only surfaced agentic row for this profile)
- xAI's own launch materials claim leadership in agentic tool calling and instruction following, but publish no number; that claim is not scored here.
- Terminal-Bench, Tau3, GDPval, Claw-Eval, Toolathlon, and MCP-Atlas: **no verified public exact value found**

Reasoning / knowledge:

- FrontierMath v2 Tiers 1–3: **19.655%**; Tier 4: **2.083%** (BenchLM, Epoch AI leaderboard)
- Artificial Analysis Intelligence Index: **34 (estimated)**, **#108 of 195** in its price
  class, below the class median of 36 (AA Grok 4 model page, accessed 2026-09-29). The page
  renders the footer for the older v4.1.1 basis; **no v4.3.2 reading was verifiable for this
  withdrawn model**, so 34 is recorded as displayed. **New in this revision.**
- GPQA, HLE, LCR/MLCR, CritPt: **no verified public exact value found**

Coding:

- React Native Evals: **72.6%** (BenchLM, React Native Evals leaderboard)
- SWE-bench Verified, SWE-Pro, LiveCodeBench, SciCode, DeepSWE, and Vibe Code Bench: **no verified public exact value found**

Long context:

- Native context: **256K tokens**; higher price tier above 128K; no retrieval-at-length result found.

Sources consulted: [xAI Grok 4 0709 model page](https://docs.x.ai/docs/models/grok-4-0709), [xAI May 15 2026 retirement migration guide](https://docs.x.ai/developers/migration/may-15-retirement), [xAI docs overview](https://docs.x.ai/docs/overview), [Oracle xAI Grok 4 (Deprecated)](https://docs.oracle.com/en-us/iaas/Content/generative-ai/xai-grok-4.htm), [Artificial Analysis Grok 4](https://artificialanalysis.ai/models/grok-4), and [BenchLM Grok 4 profile](https://benchlm.ai/models/grok-4), accessed 2026-09-29. Grok 4.1/4.2/4.3/4.6 specifications are not transferred to Grok 4.

### Normalized scores (1–100)

- **Tool use: 48/100.** Unchanged. Gert Labs Composite Game 42.34 is the only surfaced agentic measure, and no standard Terminal-Bench/Tau/tool benchmark was found. Retirement does not change measured behavior but removes any prospect of new evidence.
- **Reasoning: 42/100.** Up from 38. The model is confirmed reasoning-capable (xAI docs; AA lists reasoning = Yes), and the AA Intelligence Index of 34 is a real datapoint against the 58 ceiling, which is stronger than the FrontierMath-only basis of the prior revision. Still held low: no GPQA/HLE/LCR/CritPt values and the model sits below its own price-class median of 36.
- **Context window: 76/100.** Up from 60. The native limit is 256K, verified on xAI's own model page, which moves it from the sub-200K band into the 200K–500K tier; the prior 128K figure was an aggregator error. Held below the top tier because no retrieval-at-length result was ever published and pricing steps up above 128K.
- **Multimodal: 68/100.** Up from 15. xAI and Oracle both document text and image input with text output, so the text-only 15 floor no longer applies. Capped because nothing leaves the text channel, there is no audio or video input, and the promised image generation never shipped.
- **Coding: 65/100.** Unchanged. React Native Evals 72.6% is useful, but standard SWE-bench, LiveCodeBench, SciCode, and DeepSWE results are absent.
- **Cost efficiency: 45/100.** Down from 60. $3.00 in / $15.00 out is the same ~$3/$15 anchor the methodology scores near 60, but the price is now purely historical: the slug redirects to `grok-4.3` at $1.25/$2.50, so anyone still sending `grok-4` is paying grok-4.3 rates and receiving grok-4.3 output.
- **Overall Score: 59.8/100.** (48 + 42 + 76 + 68 + 65) / 5 = 299 / 5 = 59.8, up from 45.2 on 2026-09-24. The increase comes entirely from correcting three factual errors in the prior revision — 128K context (actually 256K), "non-reasoning" (it reasons), and "no published price" ($3/$15) — plus the newly cited AA index of 34. Best fit: historical comparison only; use `grok-4.3` or `grok-4.6`.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: Public web research of xAI's own model and migration documentation, Oracle's deprecated-model page, Artificial Analysis, and BenchLM; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
