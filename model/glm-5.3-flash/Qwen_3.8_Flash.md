# GLM 5.3 Flash — findings by Qwen 3.8 Flash

- Source: Z.AI / GLM-5.3-Flash (`opencode/glm-5.3-flash`)
- Date: 2026-10-02 (UTC); second pass 2026-11-03 (UTC) — window conflict resolved tier-dependent (paid 1M/131K, free tier shorter), pricing/zai rows reconfirmed, AA v5 drift, bands unchanged
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3-Flash (open-weight agentic coding MoE)
- **Short description:** Z.AI's ultra-fast Flash-class agent — frontier agentic reads (Terminal-Bench 2.1 84.3%, GDPval-AA 1773, Toolathlon-Verified 78.4%, SWE-bench Vals 92.0%, LiveCodeBench Vals 80.5%) with good GPQA (91.2%) and chart/document vision (CharXiv 89.4), on a free Zen tier. Offsetting: AA-HLE 39.9% just under the 40 bar, EnterpriseOps-Gym 33.2% / GDP.pdf 15.4% weak, and a low Omniscience Index (7.5). BenchLM #54 of 645 (58.57), 37/618 rows.
- **Provider / access:** Z.AI open weights (`zai-org/GLM-5.3-Flash`); OpenCode Zen free tier (`opencode/glm-5.3-flash`); OpenRouter. Reasoning + tool calls.
- **Release / knowledge:** Z.AI GLM-5.3-Flash launch post; knowledge cutoff not disclosed.
- **IDs:** `opencode/glm-5.3-flash` / `zai-org/GLM-5.3-Flash`.
- **Context window:** BenchLM/model card list **1M**; curated `meta.json` says 204K — conflict, unresolved (scored conservatively between the two).
- **Modalities:** BenchLM reports image/chart/document vision (CharXiv, MMVU, OfficeQA) — curated `meta.json` "Text in/out" is out of date. Text out; reasoning on; tool calls.
- **Pricing (as of 2026-10-02):** Free Zen tier available; open weights (self-host free).
- **Architecture:** open-weight MoE, hosted or self-host.

### Raw benchmarks found

> Independently verified against BenchLM (37 of 618 rows; 58.57/100, #54 of 645), citing the Z.AI GLM-5.3-Flash launch post, plus Artificial Analysis, Vals AI, OpenHarmony and OpenRouter (fetched 2026-10-02). BenchLM flags partial coverage (conservative overall).

Agent / tool use:

- **Terminal-Bench 2.1 84.3%** (card + AA); **GDPval-AA 1773** (clears 1750 bar); Toolathlon-Verified 78.4%; AA AutomationBench 60.4%; AA Briefcase 1452; HLE w/ tools 55.3%
- AA τ3-Banking 47.2%; AA ITBench 51.2%; Terminal-Bench 2.1 (Vals) 62.9%; Terminal-Bench 4.0 32.8%; EnterpriseOps-Gym 33.2%; GDP.pdf 15.4% (weak)

Coding:

- **SWE-bench (Vals) 92.0%**; **LiveCodeBench (Vals) 80.5%**; DeepSWE 63.4%; Terminal-Bench 2.1 84.3%
- NL2Repo 56.3%; OpenHarmony Bench 57.3%; AA-SciCode 51.6%

Reasoning / knowledge:

- **AA-GPQA Diamond 91.2%** (clears 90; Vals 86.4); AA-HLE 39.9% (just under 40 bar); MMLU-Pro (Vals) 86.1; AA Intelligence Index 41.8; MLCR-AA 51.1; AA-LCR 80.0; CritPt 15.4
- AA-Omniscience Index 7.5 (low factual index)

Multimodal / long context:

- CharXiv 89.4%; Chartography (tools) 78.0%; MMVU 80.5%; OfficeQA Pro 62.4%; BabyVision 53.4%; Design Arena Website 1280
- 1M (card) / 204K (curated) window; AA-LCR 80.0 supportive; no ≥98% MRCR reported.

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 85/100.** Genuinely frontier agentic signals — Terminal-Bench 2.1 84.3% and GDPval-AA 1773 both clear their bars, with Toolathlon-Verified 78.4% and AutomationBench 60.4% behind them — trimmed by EnterpriseOps-Gym 33.2%, GDP.pdf 15.4% and the harder Terminal-Bench 4.0 32.8%.
- **Reasoning: 78/100.** GPQA-Diamond 91.2% clears the 90 bar and MMLU-Pro 86.1 / MLCR 51.1 are solid, but AA-HLE 39.9% just misses the 40 bar, CritPt 15.4% is low and a weak Omniscience Index (7.5) flags factual unreliability.
- **Context window: 84/100.** BenchLM's 1M and the curated 204K conflict directly; with no demonstrated ≥98% MRCR retrieval at scale, the unresolved window is scored in the upper band between the two claims rather than at the full ≥1M tier (AA-LCR 80.0 supportive).
- **Multimodal: 74/100.** A real chart/document/image profile (CharXiv 89.4, Chartography 78.0, MMVU 80.5, OfficeQA Pro 62.4) — mid-to-upper +image/PDF tier; no video/audio rows and text-only output, so no non-text-output credit.
- **Coding: 85/100.** SWE-bench (Vals) 92.0% and LiveCodeBench (Vals) 80.5% are strong agentic-code results and Terminal-Bench 2.1 84.3% reinforces it; DeepSWE 63.4% and SciCode 51.6% keep it just under the very top.
- **Cost efficiency: 95/100.** A free Zen tier plus open weights (free self-host) make this near the cheapest capable agentic coder in the queue. Cost is excluded from Overall.
- **Overall Score: 81/100.** Mean of Tool 85, Reasoning 78, Context 84, Multimodal 74, Coding 85 = 81.2 → 81. Best fit: fast, free agentic coding and tool-use automation (SWE-bench 92, Terminal-Bench 84.3, GDPval 1773) with chart/document reading — outstanding value on the free tier; verify factual output (weak Omniscience) and treat the 1M-vs-204K window claim cautiously in real long-context work.

---

## Second-pass update — 2026-11-03 (UTC)

Staleness-triggered re-research (prior pass 2026-10-02); three independent sources consulted.

**Sources:** Z.AI official — https://z.ai/blog/glm-5.3-flash (2026-08-26 launch: **"Frontier Intelligence, Flash Cost … scoring 57 at just $0.045 per task (discounted)"**; "outperforms GLM-5.2 … 63.4 vs 46.2 on DeepSWE v1.1" — the 63.4 matches this report's DeepSWE row) · pricing/profile — https://artificialanalysis.ai/models/glm-5-3-flash (**"Pricing for GLM-5.3-Flash is $0.15 per 1M input tokens … $0.50 per 1M output"**) and https://deepinfra.com/blog/glm-5-3-flash-pricing-providers-cost (**"Standard pricing is $0.15 input / $0.50"**) and https://openrouter.ai/z-ai/glm-5.3-flash (budget provider route $0.0313/$0.0846; **"native multimodal model"** — confirms the image-in reading over stale curated "Text in/out") · window conflict — https://zhuanlan.zhihu.com/p/2094531152723945247 (2026-10-16: **"GLM-5.3 Flash 付费版：1M 上下文，最多131k 输出"** — paid variant 1M/131K, i.e. the conflict is **tier-dependent**) and https://docs.bigmodel.cn/cn/guide/models/vlm/glm-5.3-flash (320B total / sparse active, Flash+FlashX pair) · status — https://opencode.ai/data/zhipuai/glm-5-3-flash (**"GLM-5.3-Flash (formerly ox-alpha) ranked #3 by tokens across OpenCode last week, with 2.8% of tokens"**) and https://www.reddit.com/r/opencode/comments/1x799zh/glm_53_flash_is_free_in_opencode/ (free Zen tier live) · weights caveat — https://felloai.com/glm-5-3/ and https://www.reddit.com/r/LocalLLaMA/comments/1vny9zs/glm_53_released/ (**"We will release the weights in two weeks after launch, once safety evaluation … complete"** — the family's weight drop was deliberately delayed over emergent cyber capabilities).

**What moved and how it was resolved:**

1. **The 1M-vs-204K conflict resolved as tier-dependent.** Chinese launch coverage (2026-10-16) documents the **paid** GLM-5.3-Flash at 1M context / 131K output, while the curated 204K matches the constrained free route this id (`opencode/glm-5.3-flash`, Zen free tier) actually serves. Context 84 — pass 1's deliberately between-the-two score — remains the right placement for the free-tier serving surface, now with the conflict explained rather than unresolved; the band is unchanged.
2. **Pricing and cost position reconfirmed.** List $0.15/$0.50 (AA, DeepInfra) with sub-cent OpenRouter routes; the Zen free tier is not only live but **the #3 model by OpenCode tokens** (formerly "ox-alpha"). Cost stays 95 (free + open-weight promise + dirt-cheap paid).
3. **Vendor rows corroborate, scale drift aside.** Z.AI's own launch table restates DeepSWE 63.4 — matching the captured row — and claims an Index-class 57 at $0.045/task vs this report's 41.8 BenchLM capture; the delta is the same v4.x-vs-v5 / vendor-vs-independent pattern seen batch-wide (recorded side by side, not averaged, no band moved; the low Omniscience 7.5 flag is untouched by these claims). OpenRouter's "native multimodal" label further validates Multimodal 74 over the stale curated text-only field.
4. **Open-weights promise delayed, not cancelled.** Family coverage shows Z.AI held GLM-5.3 weights back ~2 weeks post-launch pending safety hardening (emergent cyber capabilities) — pass 1's "open weights (self-host free)" framing gets a timing/availability caveat; the free hosted tier is what the score actually rests on.

**Scores changed by this pass:** None. Tool 85, Reasoning 78, Context 84, Multimodal 74, Coding 85 → Overall = half-up mean(85, 78, 84, 74, 85) = 406/5 = 81.2 → **81, unchanged**.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows citing the Z.AI GLM-5.3-Flash launch post, plus Artificial Analysis, Vals AI, OpenHarmony and OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Second-pass signature: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-11-03. Method: ≥3 independent sources (Z.AI blog, Artificial Analysis, DeepInfra, OpenRouter, bigmodel.cn docs, zhihu/opencode/reddit coverage, felloai); window conflict resolved tier-dependent (paid 1M vs free 204K), $0.15/$0.50 list reconfirmed, free tier thriving at #3 OpenCode usage, weights-delay caveat recorded, vendor 57-vs-41.8 index delta un-averaged as scale drift — **no dimension changed and Overall remains 81**. Prior pass retained verbatim per RULES.md.
- Future sources: add a new file next to this one, e.g. `GLM_5.md`, using the same headings.
