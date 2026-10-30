# GLM 5.3 FlashX — findings by MiniMax M3.1 Flash

- Source: Z.ai (`glm-5.3-flashx`)
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 FlashX (vendor model code `glm-5.3-flashx`; dataset slug `glm-5.3-flash-x`)
- **Short description:** Z.ai's high-speed serving tier of the GLM-5.3-Flash weights — the same 320B-total / 18B-active multimodal MoE checkpoint, re-served for up to 200 output tokens/s at roughly 2.5× the base tier's price ($0.37/$1.25 vs $0.15/$0.50 per 1M). Flag: **not a separate model.** Z.ai documents one page, one model family ("GLM-5.3-Flash/FlashX"), and OpenRouter's own description says FlashX is "built on the same hybrid sparse and linear attention architecture (320B total parameters, 18B active)"; no separate weights exist (`zai-org` publishes GLM-5.3 and GLM-5.3-Flash only). The dataset also carries a sibling folder `model/glm-5.3-flashx/` for the same vendor tier — the two slugs differ only by the hyphen before the `x` (see agreement notes).
- **Provider / access:** Z.ai Chat Completions API, model code `glm-5.3-flashx` ([Z.ai docs](https://docs.z.ai/guides/llm/glm-5.3-flash)); OpenRouter `z-ai/glm-5.3-flashx` (Chat Completions, `reasoning_effort` / `response_format` / `tools` / `tool_choice` supported; not available via EU in-region routing). The dataset's own meta ID `opencode/glm-5.3-flash-x` was **not** found in the live OpenCode Zen catalogue (78 model ids; the GLM routes there are `glm-5`, `glm-5.1`, `glm-5.2`, `glm-5.3`, `glm-5.3-flash`, `glm-5.3-flash-free` — zero hits for `flashx` or `flash-x`).
- **Release / knowledge:** the underlying GLM-5.3-Flash weights were published 2026-08-26 on Hugging Face (`zai-org/GLM-5.3-Flash`, MIT, weights on day one) after an anonymous stealth run as `ox-alpha` on OpenCode and OpenRouter; the FlashX speed tier went live 2026-09-18 (first OpenRouter listing date) and is documented on Z.ai's GLM-5.3-Flash page. Knowledge cutoff not published by Z.ai.
- **IDs:** `glm-5.3-flashx` (Z.ai API), `z-ai/glm-5.3-flashx` (OpenRouter); dataset slugs `glm-5.3-flash-x` and `glm-5.3-flashx`. A separate enterprise-only legal variant exists as `glm-5.3-flashx-legal` (application-gated; Harvey LAB all-criteria pass rate 19.2%, +12.5 points over the base model) and is **not** part of this entry.
- **Context window:** 1,048,576 tokens total (1M), maximum output 128K (131,072) — Z.ai docs (context 1M / max output 128K), OpenRouter listing (1,048,576), Artificial Analysis (1M). Verified across three independent surfaces.
- **Modalities:** video / image / text / file in; text out; reasoning always on (`thinking.type` supports only `enabled`; cannot be disabled) with `reasoning_effort` low / high / max (default **max**); function calling, streaming (incl. `tool_stream`), structured output (JSON), context caching.
- **Pricing (as of 2026-10-30):** $0.37 input / $0.075 cached input / $1.25 output per 1M on Z.ai's official pricing page (cached-input storage free for a limited time). OpenRouter lists the same $0.37 / $1.25 but $0.09 cached input. Base GLM-5.3-Flash is $0.15 / $0.03 / $0.50 (its $0.075 / $0.25 launch promotion expired 2026-09-09). FlashX is **not** included in the GLM Coding Plan subscription; the weights beneath it are MIT-licensed and self-hostable, but the 200 tok/s advantage is a property of Z.ai's serving stack, not of the checkpoint.
- **Architecture:** 320B total / 18B active MoE on a hybrid sparse + linear attention design with Manifold-Constrained Hyper-Connections (mHC) and an IndexPool key-compression stage; attention compute −3.0× and KV cache −4.4× versus GLM-5.3; trained on a 30T-token multimodal corpus; MIT licence on the weights. FlashX itself is an API-only serving configuration with no separate checkpoint.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **84.3%** (Z.ai-reported — HF card, Claude Code 2.1.207, temperature 1.0 / top_p 1, max_new_tokens 65536, 6h timeout; reproduced in an independent comparison table) vs Claude Opus 4.8 85.0, GPT-5.6 Terra 87.4, Gemini 3.7 Flash 85.8
- Terminal-Bench 4.0: **37.4%** (Terminal-Bench 4.0 leaderboard, Oct 28 2026 snapshot: "GLM-5.3-Flash / Z.AI / 37.37% / max reasoning" — read from the leaderboard's search-indexed row; the table itself renders client-side and could not be machine-read). Context: GPT-6 Astra (max) 59.1%, Claude Fable 5.1 52.0%, Claude Opus 5 49.0%, GPT-5.6 Sol (max) 39.9% (Artificial Analysis, mini-swe-agent harness, 66 tasks × 3 runs, avg pass@1)
- Terminal-Bench 2.0: **35.8% ± 3.5%** (Terminal-Bench 2.0 leaderboard, Claude Code harness, Aug 26 2026) — a different benchmark version, not comparable with 2.1
- GDPval-AA: **1773 Elo** (Z.ai-reported; per the model-card footnote the evaluation was run by Artificial Analysis) vs GLM-5.2 1504, Opus 4.8 1582, GPT-5.6 Terra 1571
- Toolathlon Verified: **78.4** (official evaluation service, pass@1 averaged over 3 runs) vs GLM-5.2 59.9, Opus 4.8 76.2
- AutomationBench v1.0.6: **48.8** (Z.ai-reported, Zapier benchmark v1.0.6 incl. the PR #13 `null`-handling fix) vs GLM-5.2 26.2, Gemini 3.7 Flash 52.3
- Agents' Last Exam: **26.3** (Z.ai-reported) vs Opus 4.8 27.0, GPT-5.6 Terra 28.0
- Tau3-Banking / Tau2-Bench: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- HLE with tools: **55.3%** (Z.ai-reported; temperature 1.0 / top_p 0.95, max generation 163,840, 300K maximum context with context management, GPT-5.6-luna (medium) as judge) vs GLM-5.2 54.7, Opus 4.8 57.9
- Artificial Analysis Intelligence Index: **42 on v4.3** (launch article 2026-09-07 — third-strongest open-weights model, $0.25 cost per Index task vs GPT-5.6 Terra (max) $1.40 at the same 42) / **41.81 on v4.3.2** (#4 of 118 open-weights models, $0.25 per task, 51.4 output tok/s, 3.31s TTFT) / **57 on v4.1.1** at release (2026-08-26, $0.045 per task at the then-promotional price, 149M output tokens) / **28 on v5.0** (current model page: 129 of 718 models, $0.58 per Index task, 70.5 output tok/s, 80% cache discount, 120M output tokens). Index versions are not mutually convertible.
- Omniscience Accuracy / Hallucination Rate: no verified public score found
- GPQA Diamond / LCR / MLCR / CritPt: no verified public score found

Coding:

- DeepSWE v1.1: **63.4** (Z.ai-reported — mini-swe-agent harness, temperature 0.95 / top_p 1.0, 400K context, 6h timeout) vs GLM-5.2 46.2, Opus 4.8 58.0, Gemini 3.7 Flash 65.3, GPT-5.6 Terra 69.6
- Z.ai Code Bench v1.0: **29.0** at max effort (Claude Code 2.1.207) vs Claude Opus 4.8 29.5
- NL2Repo: **56.3** (Z.ai-reported, temperature 1.0 / top_p 1.0, max_new_tokens 64k, evaluated under a 1M-token context) vs GLM-5.2 48.9, Opus 4.8 69.7
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench / SciCode / AA-SciCode / Vibe Code Bench: no verified public score found

Vision (native multimodal input):

- CharXiv Reasoning with tools: **89.4** (Z.ai-reported) vs Opus 4.8 89.9
- Chartography with tools: **78.0** (Z.ai-reported) vs Opus 4.8 75.0
- MMVU: **80.5** (Z.ai-reported) vs Gemini 3.7 Flash 82.3
- MVbench: **77.8** (Z.ai-reported) vs Gemini 3.7 Flash 82.2
- OfficeQA Pro: **62.4** (Z.ai-reported)
- BabyVision: **53.4** (Z.ai-reported; 164K max context, images resized to ≥1.5K px on the shorter side) vs Gemini 3.7 Flash 70.9, GPT-5.6 Terra 61.6

Long context:

- The 1M-token window is vendor-documented and cross-confirmed by OpenRouter and Artificial Analysis, but **no long-context retrieval benchmark (MRCR / RULER / GraphWalks / AA-LCR value) was published for this model** — no verified retrieval figure found. The longest vendor-reported runs are NL2Repo under a 1M context and HLE with tools at a 300K context.

Throughput and cost (independent):

- FlashX throughput is a **vendor claim of up to 200 output tokens/s** (Z.ai docs and OpenRouter's model description); no independent measurement of the FlashX endpoint was found — Artificial Analysis scores the base weights only and has no FlashX entry.
- Artificial Analysis measures the same weights across **24 API providers** at 44–1,477 output tok/s (Inco (FAST) 1,476.7; LithosAI (FP4, ULTRA CHAT) 1,449.4; LithosAI (FP4, ULTRA) 590.3; Bitdeer AI 247.1; a 3,333% fastest-to-slowest spread), best time-to-first-answer-token 2.01s, and blended prices from $0.05 (GMI) to $0.10 per 1M (Z.ai).
- Cost per Artificial Analysis Intelligence Index task: $0.25 (v4.3) → $0.58 (v5.0 task mix); the base GLM-5.3-Flash full index run cost $280.28.

### Normalized scores (1–100)

- **Tool use: 87/100.** Frontier-adjacent agent profile: GDPval-AA v2 1773 Elo clears the ~1750 frontier reference (and was run by Artificial Analysis per the vendor footnote), Terminal-Bench 2.1 84.3% sits just under Opus 4.8 (85.0) and the ~88% frontier bar, Toolathlon Verified 78.4 and AutomationBench v1.0.6 48.8 are strong for a flash-tier model, and the independent Terminal-Bench 4.0 result of 37.4% is roughly GPT-5.6 Sol (max) level on a much harder task set. Capped below the 90–100 band by no verified Tau2/Tau3 figure and by the vendor-authored TB2.1/AutomationBench rows.
- **Reasoning: 64/100.** HLE with tools 55.3% clears the ~40% frontier bar, and the independent Artificial Analysis Intelligence Index v5.0 score of 28 places the model in the mid band (20–35 → 55–65) with $0.58 per Index task (cheap for that band). Capped by no public GPQA Diamond, CritPt or AA-LCR value and by a mid-range index result; the 57 on the launch-era v4.1.1 index is not comparable to the current v5.0 number.
- **Context window: 96/100.** 1,048,576 tokens confirmed by three independent surfaces (Z.ai docs, OpenRouter, Artificial Analysis) with a 128K maximum output — top of the ≥1M tier band. Not 100 because no ≥98%-retrieval-at-512K+ measurement exists for this model.
- **Multimodal: 82/100.** Video / image / text / file in with text out — the "+video/PDF" band (75–90), backed by Z.ai's own vision table (CharXiv 89.4, Chartography 78.0, MMVU 80.5, MVbench 77.8, OfficeQA Pro 62.4). Capped by no audio input and text-only output, and by Gemini 3.7 Flash leading the same table on BabyVision (70.9 vs 53.4), MVbench and MMVU.
- **Coding: 74/100.** DeepSWE v1.1 63.4% is solid but below the ~74% frontier reference, Terminal-Bench 2.1 84.3% is just under the ~85% bar, and Z.ai Code Bench v1.0 at max effort (29.0) nearly matches Claude Opus 4.8 (29.5). Capped by the much lower independent Terminal-Bench 4.0 result (37.4%) and by the absence of any public SWE-bench Verified, LiveCodeBench or SciCode figure for this model.
- **Cost efficiency: 92/100.** $0.37 in / $1.25 out per 1M with an 80% cached-input discount is inexpensive in absolute terms — clearly better than the ~$1.25/$4.25 ≈ 88 reference point — and Artificial Analysis measures only $0.25 per Intelligence Index task on v4.3. Penalising factor: the identical weights are available at $0.15/$0.50 (≈2.5× cheaper), so the tier premium buys throughput, not capability, and there is no free route (FlashX is excluded from the GLM Coding Plan).
- **Overall Score: 80.6/100.** Half-up mean of the five quality dims (87 + 64 + 96 + 82 + 74) / 5 = 80.6. Best fit: low-latency multimodal agentic and coding work — streaming editors, interactive visual-coding loops — where output throughput rather than raw capability is the binding constraint and $0.37/$1.25 is acceptable; for everything else take the same weights at $0.15/$0.50 on the base GLM-5.3-Flash route.

### Agreement notes (conflicting readings)

- **One vendor, two dataset slugs.** `model/glm-5.3-flash-x/` (this entry, meta id `opencode/glm-5.3-flash-x`) and `model/glm-5.3-flashx/` (meta id `opencode/glm-5.3-flashx`) describe the same Z.ai tier — identical $0.37/$1.25 pricing, identical 1M window, identical "Z.ai's speed-optimized 320B/18B flash" short description. The vendor spelling carries no hyphen: Z.ai's own model code is `glm-5.3-flashx` and OpenRouter's ID is `z-ai/glm-5.3-flashx`. Neither slug appears in `model-aliases.generated.md`, and the tooling's hyphen-version gate only fires on digit-hyphen-digit joins, so the duplication is invisible to `pnpm sync`. The serving-profile rule in `RULES.md` (and the `kimi-k2.7-code-highspeed` precedent, parked with "research belongs in model/kimi-k2.7-code/") points to one folder with the base model — but parking a live folder needs per-instance user sign-off, so nothing was moved or deleted here.
- **Neither dataset ID is a live Zen route.** The Zen catalogue (78 ids) exposes `glm-5.3-flash` and `glm-5.3-flash-free` but no `glm-5.3-flash-x` / `glm-5.3-flashx`; the verifiable public IDs for this tier are Z.ai's `glm-5.3-flashx` and OpenRouter's `z-ai/glm-5.3-flashx`.
- **FlashX's evidence quality changed over five weeks.** On 2026-09-21 an independent write-up found *no* primary source for FlashX at all — no Z.ai announcement, no Hugging Face card, no OpenRouter changelog entry, no published parameter count or price — with the "200 tokens/s" figure traceable only to an unsourced news-digest headline; it recommended treating the name as "a name to watch" and hypothesised (correctly) a speed-optimised serving configuration of the Flash weights. By October both Z.ai's documentation and OpenRouter's listing confirm the model code, price and the 200 tok/s claim. The 200 tok/s figure therefore remains a **vendor claim with no independent endpoint measurement**; Artificial Analysis has no FlashX entry at all and evaluates the base weights only.
- **Index-version drift (same weights, four different scores).** Artificial Analysis Intelligence Index: 57 on v4.1.1 (2026-08-26, promotional price, $0.045/task) → 42 on v4.3 (2026-09-07, $0.25/task) → 41.81 on v4.3.2 (#4/118 open-weights, 51.4 tok/s) → 28 on v5.0 (129/718, $0.58/task, 70.5 tok/s). AA states there is no conversion between index versions; only same-version comparisons are meaningful. The v5.0 figure is the live one and is used above.
- **Terminal-Bench: three numbers, three different scales.** 84.3% (TB 2.1, Claude Code 2.1.207, vendor-run), 35.8% ± 3.5% (TB 2.0, Claude Code, independent) and 37.4% (TB 4.0, mini-swe-agent, independent). TB 4.0's 66 tasks share no overlap with TB 2.1's 89 and raise per-task allowances; Vals AI's methodology page states explicitly that scores are not comparable across versions. The vendor's 84.3% and the independent 37.4% are therefore not contradictory — but only the independent pair should be read as a current capability measure.
- **Throughput conflict.** The FlashX tier claims up to 200 tok/s, while Artificial Analysis measured the same weights at 51.4 tok/s (v4.3.2 snapshot) and 70.5 tok/s (current v5.0 page) on its own default endpoint; across 24 providers the same weights span 44–1,477 tok/s. The 200 tok/s figure is a mid-tier *provider* result for these weights, not a model property.
- **Cached-input price conflict.** Z.ai's official pricing page lists $0.075 per 1M cached input for GLM-5.3-FlashX (an 80% discount), OpenRouter's listing shows $0.09, and one independent table shows $0.09 in the price grid while its FAQ quotes $0.075. The vendor page is used here.
- **Search-snippet trap avoided.** An independent comparison table's "85.8 / 65.3 / 52.3" row values belong to Gemini 3.7 Flash (Terminal-Bench 2.1 85.8, DeepSWE 65.3, AutomationBench 52.3), not to any GLM FlashX variant; the search snippet that surfaced them omitted the column headers. Also noted: the "-X" in one earlier fetch was the curl `-X` HTTP-method flag, not a model suffix.
- **Vendor-authored rows are labelled as such.** Terminal-Bench 2.1, DeepSWE v1.1, Toolathlon Verified, AutomationBench, Agents' Last Exam, HLE-with-tools, NL2Repo, Z.ai Code Bench and the whole vision table are Z.ai's own numbers (the GDPval-AA row and the DeepSWE/Terminal-Bench harnesses are documented in the model card's footnotes). The only fully independent measurements located are the Artificial Analysis index/speed/cost numbers, the Terminal-Bench 2.0 and 4.0 leaderboard rows and the 24-provider throughput spread.
- **License split.** The Flash branch (Flash and FlashX) is plain MIT; the flagship GLM-5.3 uses a bespoke `glm-5.3` licence with a $10B-revenue security-review clause for MaaS operators. The FlashX tier itself has no downloadable weights — the speed advantage belongs to Z.ai's serving stack, so self-hosting `zai-org/GLM-5.3-Flash` cannot reproduce it.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax-m3.1-flash-preview)** — 2026-10-30
- Method: public internet research (Z.ai model guide and official pricing page, `zai-org/GLM-5.3-Flash` Hugging Face card with evaluation footnotes, OpenRouter `z-ai/glm-5.3-flashx` listing and API docs, Artificial Analysis model page / v4.3 index article / provider-speed page, Vals AI Terminal-Bench 4.0 methodology, Terminal-Bench 2.0 and 4.0 leaderboard rows, the OpenCode Zen live catalogue, plus independent comparison write-ups — codersera, explainx.ai, Eden AI, IntuitionLabs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GLM_5.3_Flash.md`, using the same headings.
