# GLM-4.5-Flash — findings by Step 5 Preview

- Source: Zhipu AI / Z.ai (`glm-4.5-flash`)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-4.5-Flash
- **Short description:** Z.ai's **free-tier, distilled lightweight member of the GLM-4.5 family**, marketed as "Free · Strong Performance · Excellent for Reasoning, Coding & Agents." Shares the GLM-4.5 hybrid-reasoning design (thinking / non-thinking modes) but with a smaller parameter footprint than the 355B-A32B flagship. Optimized for tool invocation, web browsing, software engineering and front-end programming, and designed to drop into coding agents like Claude Code and Roo Code. It is a **distinct sub-variant, not an alias** of `glm-4.5` or `glm-4.5-air` — no shared weights are published for it.
- **Provider / access:** Z.ai developer API (`https://api.z.ai/api/paas/v4`, OpenAI-compatible Chat Completions), Zhipu BigModel / `docs.bigmodel.cn` for the domestic route, plus third-party hosts: UnoRouter (`zhipu/glm-4.5-flash:free`, $0/$0, fp8 quant, expires Dec 2026), Tempr Gateway (`zai/glm-4.5-flash`), Puter, RentGPU. **Free on OpenCode Zen** (`$0` in/out) and `$0.00/$0.00` on the Z.ai developer platform.
- **Release / knowledge:** released **2025-07-28** alongside GLM-4.5 and GLM-4.5-Air. Knowledge cutoff **2025-04** (freellm.net / ModelBench); UnoRouter lists **Dec 2024** — conflicting, both noted. **Lifecycle warning:** the Zhipu BigModel docs state GLM-4.5-Flash is being **retired on 2026-01-30**, after which requests auto-route to GLM-4.7-Flash; Ox Alpha nonetheless still lists it as free on Z.ai as of 2026-10-29, so the international route appears to outlive the domestic one.
- **IDs:** `glm-4.5-flash` (Z.ai, BigModel, Puter); `zhipu/glm-4.5-flash:free` (UnoRouter); `zai/glm-4.5-flash` (Tempr Gateway); OpenCode Zen free tier. (also recorded: `zhipuai/glm-4.5-flash`)
- **Context window:** **128K (128,000–131,072)** context — verified on the official Z.ai docs, Zhipu BigModel docs, ModelBench (131.072K), LiteLLM (128,000) and UnoRouter (131.1K). **Max output 96K** per the official docs and freellm.net, 98.304K per ModelBench, but **32,000** per LiteLLM — three sources disagree; treat 96K as the vendor figure and note the discrepancy. Hybrid reasoning toggled via `thinking.type` (`enabled` / `disabled`), dynamic thinking on by default.
- **Modalities:** **text in / text out only** — no image, audio, video or PDF input (ModelBench: "Attachments No, Vision input No"). Reasoning yes (hybrid dual-mode), tool calling yes, structured/JSON output yes, streaming yes, temperature control yes (UnoRouter default 0.75). No non-text output.
- **Pricing (as of 2026-11-04):** **Free** — `$0` input, `$0` cached input, `$0` output on the official Z.AI pricing page; `$0.00/$0.00` on the Z.ai developer platform and OpenCode Zen. Free-tier rate limits apply (freellm.net lists **1 concurrent request** as the provider policy). **Conflict:** Puter's gateway lists `$0.10/$0.10` per 1M — a paid third-party route, not the vendor free tier. Self-hosting is paid GPU time only.
- **Architecture:** **distilled from GLM-4.5** per RentGPU ("smaller, cheaper to run, similar reasoning style"). **Closed weights for this variant** — there is no `zai-org/GLM-4.5-Flash` repository; Hugging Face publishes GLM-4.5, GLM-4.5-Air, their FP8 and Base variants, and GLM-4.6, but not a Flash member. **Conflict:** freellm.net claims "Open weights Yes / Weights Hugging Face," but its own Model ID field reads `glm-4.5` and its specs otherwise match GLM-4.5 — that row appears to conflate Flash with the flagship, so it is not counted as evidence of open Flash weights. No parameter count published for GLM-4.5-Flash; the family's flagship is 355B total / 32B active MoE.

### Raw benchmarks found

> GLM-4.5-Flash has **no dedicated published benchmark table** from Z.ai — the launch post and the GLM-4.5 docs page cover the 355B flagship and the 106B-Air only. Every number below is either a Flash-specific third-party measurement, a family number used as an explicit proxy, or a real-work independent run. Parent-model numbers are marked as proxies, never blended into Flash's own score.

**Reasoning / knowledge (Flash-specific)**

- freellm.net capability median, **Intelligence: 12.8/100** (general reasoning and instruction following), dated 2026-03-11
- Machine Spirituality Benchmark (independent, 200 free-form conversations): spiritual-frame adoption **36.5%** (rank 53/154), salience 52% (rank 68/154), bliss 11.5% (rank 65/154); **own-consciousness discussion 99.5% (rank 1 of 154)**; spiritual distress 0%
- GPQA Diamond, HLE, AIME, MMLU-Pro for Flash specifically: **no verified public score found**
- Proxy — parent GLM-4.5 (355B-A32B), Z.ai's own table: GPQA **79.1**, HLE **14.4**, AIME24 **91.0** (Avg@32), MATH 500 **98.2**, MMLU-Pro **84.6**, LiveCodeBench (2407–2501) **72.9**, AA-Index (Z.ai's own estimate) **67.7**. Sophon independently reports GPQA Diamond **78.2**, MMLU-Pro **83.5**, AIME 2025 **93.3**, HLE **8.3** — Z.ai's HLE 14.4 vs Sophon's 8.3 is a 6-point harness disagreement
- 16x Engineer human coding eval on the family: GLM-4.5 averaged **7.0/10** across coding tasks — behind Claude Opus 4 and GPT-5 (high), comparable to DeepSeek V3 and Kimi K2; best single task 9.5/10 (folder-watcher fix), worst 1/10 (Tailwind CSS v3 z-index — failed to identify the invalid class name, a framework-knowledge gap), TypeScript narrowing 6/10

**Agent / tool use**

- freellm.net capability median, **Agentic: 16.2/100** (tool use and multi-step tasks), dated 2026-03-11
- Terminal-Bench Hard: **22%** success rate (freellm.net external reference, 2026-03-11) — the same figure Sophon lists for GLM-4.5, so it may be a family number mis-attributed to Flash; treat as provisional
- Official vendor capability claims (Z.ai docs): "powerful tool invocation capabilities, enabling integration with various external toolsets," optimized for tool invocation, web browsing, software engineering and front-end development; plugs into Claude Code and Roo Code
- **Independent real-work battery (engineering.kenmazaika.com, 11 models, 5 real workflows with checkable answers):** GLM-4.5-Flash **failed Test 1** (industry-pulse research: returned a generic essay in 244 s instead of the real thread), **failed Test 3** (build a tool against real data: **1 of 6 vendors in the converged band, $90.67 total** vs GLM-4.5's 3/6 at $20.29 and GPT-5.6 Sol's 6/6 at $60.49), and was **not run on Test 4**. Its cost path is flagged as the outlier: "its fallback-rate path inflates deepseek and prices quota as cash." GLM-4.5-Flash was the **most expensive and least accurate** of the three GLM entries on that build test
- τ²-bench / BFCL / GDPval for Flash specifically: **no verified public score found** (family proxies: TAU-Retail 79.7, TAU-Airline 60.4, BFCL v3 77.8, BrowseComp 26.4)

**Coding**

- **AA Coding Index: 26.3** (freellm.net external reference, Artificial Analysis, 2026-03-11)
- **SciCode: 34.8%** (freellm.net external reference, 2026-03-11) — matches Sophon's independent SciCode figure for the family
- Terminal-Bench Hard **22%** (see agent/tool-use note above)
- LiveCodeBench / SWE-bench Verified for Flash specifically: **no verified public score found** (family proxies: LCB 72.9, SWE-bench Verified 64.2, Terminal-Bench 37.5, all on the 355B flagship)
- freellm.net capability median, **Coding: 26.3/100**
- Real-work battery Test 3 result above (1/6 in band at $90.67) is the strongest Flash-specific coding evidence

**Long context**

- Context window 128K documented; **no long-context retrieval figure (MRCR / RULER / GraphWalks / AA-LCR) published for GLM-4.5-Flash** — no verified public score found

**Speed**

- Z.ai reports the GLM-4.5 high-speed variants exceed **100 tokens/s** in real-world tests (family figure); 16x Engineer observed the thinking mode generating **18,392 reasoning tokens and over five minutes** on a medium-difficulty clean-markdown task, "the slowest model for this task in terms of duration" — reasoning volume is highly variable between runs

### Normalized scores (1–100)

- **Tool use: 52/100.** The official capability claims are specific and credible (native tool calling, structured output, Claude Code / Roo Code integration), but every measured agentic signal is low: Agentic capability median 16.2/100, Terminal-Bench Hard 22%, and the independent real-work battery where it failed two of four tests it ran and was the priciest, least accurate GLM entry on the build task. Capped by the absence of any τ²/BFCL/GDPval measurement for this exact ID.
- **Reasoning: 50/100.** No Flash-specific GPQA/HLE/AIME number exists in public, so reasoning must be read through the Intelligence capability median of 12.8/100 and the family's real measured spread (GPQA 79.1 down to HLE 14.4 on the flagship, with Sophon's independent HLE at 8.3). A distilled, smaller-parameter member of that family cannot be scored at the flagship's level; the distillation gap plus the low measured median caps this in the middle of the scale.
- **Context window: 62/100.** 128K nominal, verified across five independent catalogs/docs (128,000–131,072 across sources), which puts it in the 100K–200K band (50–64) just above the 128K midpoint. Max output is disputed (96K vendor vs 98.3K ModelBench vs 32K LiteLLM) — noted as a caveat, not a score change — and no retrieval-quality measurement exists at any depth.
- **Multimodal: 15/100.** Text-in / text-out only; ModelBench explicitly records no attachments and no vision input, and the vendor docs list text-only formats. Tool calling and structured JSON do not compensate. Maps to the 10–20 text-only band.
- **Coding: 46/100.** AA Coding Index 26.3, SciCode 34.8% and Terminal-Bench Hard 22% are all below the methodology's mid-band markers, and the independent real-work battery put 1 of 6 vendors in the converged band at the highest cost of any model tested. The family's 72.9 LiveCodeBench and 64.2 SWE-bench Verified belong to the 355B flagship and are recorded as proxies only — inheriting them would overstate Flash by a wide margin.
- **Cost efficiency: 100/100.** **$0** input, cached input and output on the official Z.AI pricing page, on the Z.ai developer platform, and on OpenCode Zen's free tier — a genuine zero-cost tier with no training-data caveat found, unlike some free tiers. The only paid route found is Puter's third-party gateway at $0.10/$0.10, and self-hosting cost is GPU time only. Free-tier concurrency is limited (1 concurrent request per freellm.net), which is a rate limit rather than a price penalty.
- **Overall Score: 45/100.** (52 + 50 + 62 + 15 + 46) / 5 = 45.0 -> **45**. Best fit: zero-cost prototyping, demos and low-concurrency evaluation where "free" beats "capable" - a genuinely cheap MIT-licensed weights tier with no measured capability beyond it.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** - 2026-11-06
- Method: public internet research — official Z.AI and Zhipu BigModel docs and pricing pages first, then four independent/third-party measurement sources (freellm.net's Artificial Analysis references, Sophon, ModelBench, the 16x Engineer human coding eval, the kenmazaika.com real-work battery, the Machine Spirituality Benchmark), with the GLM-4.5 flagship technical report (arXiv:2508.06471) used only as an explicitly labelled proxy. **Conflicts recorded rather than averaged:** knowledge cutoff 2025-04 vs Dec 2024; max output 96K vs 98.3K vs 32K; HLE 14.4 vs 8.3; open weights claimed by one catalog but contradicted by the absence of any Flash repository on Hugging Face; pricing Free vs $0.10/$0.10 on a third-party gateway. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Z.AI Developer Docs — Pricing (GLM-4.5-Flash listed as Free / Free / Free)](https://docs.z.ai/guides/overview/pricing)
  - [Z.AI Developer Docs — GLM-4.5 (GLM-4.5-Flash in the GLM-4.5 serials, capabilities, thinking.type)](https://docs.z.ai/guides/llm/glm-4.5)
  - [Zhipu BigModel Docs — GLM-4.5-Flash (free-model page, 128K/96K specs, retirement notice)](https://docs.bigmodel.cn/cn/guide/models/free/glm-4.5-flash)
  - [freellm.net — GLM-4.5-Flash on Z AI: free API, benchmarks and pricing](https://freellm.net/models/z-ai-zhipu-ai/glm-4-5-flash)
  - [ModelBench — GLM-4.5-Flash (provider table, context/max-output, weights flags)](https://modelbench.lol/zhipuai/glm-4.5-flash)
  - [Sophon — GLM 4.5 by Zai (independent eval set incl. SciCode 34.8, GPQA Diamond 78.2, HLE 8.3)](https://sophon.at/models/glm-4.5)
  - [GLM-4.5 technical report (arXiv:2508.06471) — family agentic/reasoning/coding tables](https://arxiv.org/pdf/2508.06471)
  - [Z.ai blog — GLM-4.5: Reasoning, Coding, and Agentic Abilities (launch post, family benchmarks)](https://z.ai/blog/glm-4.5)
  - [16x Engineer — GLM-4.5 coding evaluation (independent human-rated, 7.0/10 average)](https://eval.16x.engineer/blog/glm-4-5-coding-evaluation)
  - [Engineering battery — comparing models on real work (GLM-4.5-Flash raw data, 11 models / 5 workflows)](https://engineering.kenmazaika.com/battery-post-raw-data.pdf)
  - [Ox Alpha — GLM models (free-API list, weights timeline, license table)](https://oxalpha.run/glm)
  - [UnoRouter — glm-4.5-flash:free (pricing, context, parameters)](https://unorouter.com/en/models/zhipu/glm-4.5-flash:free)
  - [LiteLLM — GLM 4.5 Flash API pricing (conflicting 32K max output figure)](https://models.litellm.ai/models/glm-4.5-flash)
  - [Puter — GLM 4.5 Flash (conflicting $0.10/$0.10 third-party pricing)](https://developer.puter.com/ai/z-ai/glm-4.5-flash/)
  - [RentGPU — GLM-4.5-Flash (distilled-from-GLM-4.5 characterization)](https://rentgpu.org/ai-models/glm-4-5-flash)
  - [Machine Spirituality Benchmark — GLM-4.5 Flash (independent behavioral eval)](https://machinespirituality.org/model-glm-4-5-flash.html)
  - [VentureBeat — Z.ai launches GLM-4.5 family (GLM-4.5-Flash described as the free variant)](https://venturebeat.com/business/chinese-startup-z-ai-launches-powerful-open-source-glm-4-5-model-family-with-powerpoint-creation)
- Future sources: add a new file next to this one, e.g. `Step_5_Preview_2.md`, using the same headings.

---

## Archived research pass — `Step_5_Preview.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `Step_5_Preview.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative — the archived model card was folded
> into the active model card above; the content below is preserved research history, not judged data.

## glm-4.5-flash — negative findings by Step 5 Preview

> SELF-EXCLUSION: the model is real (a canonical models.dev catalog entry with a
> verified record), but ZERO verified public benchmark numbers exist for it across
> seven independent sources. Per the template's SELF-EXCLUSION clause
> (`RULES.md`, `tasks/research.md` step 3.9) this file is saved as notes only and
> carries NO scores — every benchmark row below would read "no verified public
> score found", and inventing a placeholder would drag the mean for every reader.

- Source: Zhipu AI / Z.ai (`glm-4.5-flash`) — **real model, zero verified benchmarks**
- Archived date: 2026-10-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> Archived model card omitted — own-twin consolidation 2026-11-12.
> No material conflict remained (the archived remark was a pricing-tier or non-numeric note) — the active
> values stand. Safe unions applied: IDs +1. Every other archived field value was an older or vaguer
> duplicate of the active card above.

> Archived raw-benchmark notes omitted — every row in that pass was `no verified public score found` in its research slice; superseded by the measured rows in the active report above.

#### Verification trail (seven independent checks, all run 2026-10-24)

1. **models.dev — Zhipu catalog** (`https://models.dev/api/zhipuai.json`): the canonical record reads verbatim — `GLM-4.5-Flash | zhipuai/glm-4.5-flash | Lab: Zhipu AI | Providers: 5 | Context: 131,072 | Output: 98,304 | Reasoning: Yes | Tool Call: Yes | Structured Output: Yes | Weights: CLOSED | Price: $0.00 / $0.00 | Release: 2025-07-28 | Updated: 2025-07-28`. **This confirms the model is real** — it is the one source in this pass that establishes identity, and it is the reason this file is a zero-benchmark self-exclusion rather than a phantom self-exclusion.
2. **Artificial Analysis:** `https://artificialanalysis.ai/models/glm-4-5-flash` returns **404** — no page, and therefore no Intelligence Index, rank, speed, latency or cost-per-task data exists.
3. **Hugging Face:** `https://huggingface.co/zai-org/GLM-4.5-Flash` returns **401** — the repo exists but is gated, so no model card, parameter count, license text or modality information is retrievable. (This is consistent with models.dev's "Weights: CLOSED" flag.)
4. **OpenRouter:** `glm-4.5-flash` is **not listed** on the Z.ai author page (which shows glm-4.5, -4.5-air, -4.5v, -4.6, -4.7, -4.7-flash and the glm-5 family), and the direct page `https://openrouter.ai/z-ai/glm-4.5-flash` returns **404**.
5. **Bing**, two phrasings (`"GLM-4.5-Flash" benchmarks SWE-bench AIME` and a variant): both returned only irrelevant results — no GLM-4.5-Flash content of any kind.
6. **Z.ai's own blog** (`https://z.ai/blog`): returns **404** — no announcement or guide page for this model exists.
7. **OpenCode Zen catalog** (`https://opencode.ai/docs/zen`): GLM entries listed are 5.3-Flash, 5.3, 5.2, 5.1, 5 and GLM-5.3-Flash Free — no GLM-4.5-Flash and no GLM-4.x entry at all.

#### Conflict / resolution notes

- No conflicting sources were found, because only one source carries any data for this model and all the others are silent.
- **Identity vs. evidence — the key distinction in this file.** Unlike the eight phantom slugs in this queue, `glm-4.5-flash` **is a real model**: models.dev carries a canonical record with a dated release and full capability flags. What is missing is not identity but **every benchmark**. The outcome differs accordingly: this folder gets a zero-benchmark self-exclusion (a real model with no measured data), not a phantom self-exclusion (a name with no model behind it).
- **The weights asymmetry is the most interesting verified fact:** GLM-4.5 and GLM-4.5-Air are both open weights on the same models.dev page, while GLM-4.5-Flash is marked Closed. Together with the gated HF repo and the total absence from OpenRouter and Zen, this suggests a model that was catalogued but never broadly served or published — which would also explain why no benchmark exists for it.
- **Pricing is not scored:** models.dev's `$0.00 / $0.00` is its default for an unserved model, not a verified free tier, so it must not be read as "free to use".
- **Surfaced for the orchestrator, not acted on:** this slug appears in `model-queue.md` with a computed Overall of 56.3, so other raters evidently produced reports for it. Under `RULES.md` a folder is permanent and only a *user* may park a slug. This file therefore makes no parking recommendation and no deletion — it records the negative finding and stops.
- **Re-rate trigger:** if a benchmark for this model is ever published — or if the gated HF repo, a Z.ai model card, or a gateway listing becomes reachable — this file should be superseded by a scored `Step_5_Preview.md`. The specs block above already records everything that would be needed.

> Archived normalized scores omitted — superseded by the active report above (see provenance note for the archived Overall).
---
