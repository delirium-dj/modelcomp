# Qwen3.8 2.4T A95B — findings by MiniMax M3.1 Flash

- Source: Alibaba / Qwen (`qwen-3.8-2400b-a95b`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8 2.4T A95B (catalogued in this repository as "Qwen 3.8 2400b A95b"; the vendor writes it "Qwen3.8 2.4T A95B")
- **Short description:** The open-weight sparse mixture-of-experts checkpoint of the Qwen3.8 generation — 2.4 trillion total parameters with 95 billion active — released by Alibaba on 2026-08-12 as the open-weight twin of the hosted **Qwen3.8 Max** API model. It is a text-only, always-thinking instruction model aimed at coding, professional work, research and long-horizon agentic tasks, and it is the first time Alibaba has released a Max-class model as open weights. It is a distinct artifact from `qwen-3.8-max` (same base weights, but the hosted product adds vision input, non-thinking mode, a 1M default context and built-in tools).
- **Provider / access:** Hugging Face weights `Qwen/Qwen3.8-2.4T-A95B` (213 safetensors shards, commercial "Qwen3.8-Max License"); OpenRouter `qwen/qwen3.8-2.4t-a95b` (canonical slug `qwen/qwen3.8-2.4t-a95b-20260812`), currently served by NovitaAI, Alibaba Cloud International, SiliconFlow and Venice — OpenAI-compatible Chat Completions at `https://openrouter.ai/api/v1/chat/completions`; the official **Qwen Cloud** API (`https://www.qwencloud.com`); and self-hosting via vLLM, SGLang or TokenSpeed. OpenCode Zen currently lists only `qwen3.8-max` and `qwen3.8-flash` — the 2.4T A95B checkpoint is **not** on the Zen catalogue as of 2026-11-12.
- **Release / knowledge:** weights published **2026-08-12** (Hugging Face repository created 2026-08-08; OpenRouter and Artificial Analysis both date the release 2026-08-12). Knowledge cutoff not disclosed.
- **IDs:** `Qwen/Qwen3.8-2.4T-A95B` (Hugging Face), `qwen/qwen3.8-2.4t-a95b` (OpenRouter), `qwen3.8-2.4t-a95b` (models.dev canonical id `alibaba/qwen3.8-2.4t-a95b`).
- **Context window:** **262,144 tokens natively**, documented as extensible to **1,010,000 tokens** with a longer-context deployment configuration. Artificial Analysis measures the live deployment at 262,000 tokens; OpenRouter advertises 1.0M. Recommended output budget from the vendor card: 262,144 tokens of reasoning content plus 131,072 tokens of final response inside the 1M configuration.
- **Modalities:** **text in / text out only** — the open checkpoint is explicitly text-only and rejects image or video input. Thinking mode **cannot be disabled** (`enable_thinking` is ignored / "Disabling thinking is not supported"); reasoning depth is set with `reasoning_effort` = `xhigh` (default), `medium` or `low`. Tool calling is supported through the Chat Completions `tools` parameter with an OpenAI-style `tool_call` block and a `tool` role for results; `preserve_thinking` keeps reasoning context across turns; structured output is **not** advertised for this checkpoint on Hugging Face inference.
- **Pricing (as of 2026-11-12):** **$2.00 in / $6.00 out per 1M tokens**, cached input **$0.25** (87.5% discount) — the first-party Alibaba price recorded by Artificial Analysis and the same price posted by every OpenRouter provider (NovitaAI, Alibaba Cloud Int., SiliconFlow); Venice lists a 20% promotional discount. Hugging Face inference lists $2.50 / $6.25. Open-weights licensing means a self-hosted deployment pays only infrastructure, but 2.4T parameters is an enterprise-scale serving problem. No free tier of this model exists on Zen.
- **Architecture:** sparse MoE — 2.4T total parameters, **95B activated**; 92 decoder layers laid out as 23 repetitions of (3 × Gated DeltaNet → MoE) followed by (1 × Gated Attention → MoE); 512 experts with **10 routed + 1 shared** active per token; hidden dimension 8,192; padded vocabulary 248,320; 128 linear-attention heads for V and 16 for QK (head dim 128) plus 64 query / 4 KV gated-attention heads (head dim 256, RoPE dim 64); multi-token prediction trained with multiple steps. The hybrid linear/attention stack is what keeps the KV cache affordable at 256K.

### Raw benchmarks found

> Artificial Analysis (AA) measurements are of the **open 2.4T A95B checkpoint** as deployed by a host; Qwen's own published table in the checkpoint's model card is for the hosted **Qwen3.8-Max** product and is flagged as a proxy wherever it is the only source.

Agent / tool use:

- Terminal-Bench 2.1: **82.0%** (AA, independent harness; `terminalBench21` 0.8202)
- Terminal-Bench 4.0: **11.1%** (AA; `terminalBench40` 0.1111) — the current agentic-terminal bar, and the weakest number in this evaluation
- Tau3-Banking: **49.1%** (AA; `tauBanking` 0.4907) — just under the rubric's frontier anchor of ~50%
- GDPval-AA: **1615.72 Elo** (AA, 95% CI 1597.1–1634.34); GDPval-AA normalized pass rate **55.8%** (AA, as listed on the OpenRouter benchmark summary)
- AutomationBench-AA: **57.2%** partial score (AA); Enterprise-Ops-Gym: **47.4%** (AA)
- AA-Briefcase: **1430.36 Elo** (AA, 95% CI 1422.8–1438.3), rubric pass rate **50.0%**
- Toolathlon Verified (Pass@1): **72.5%** (vendor, Qwen3.8-Max proxy); WideSearch **81.9%** (vendor, proxy); Agents' Last Exam v1.1 **27.0% pass / 52.4 score** (vendor, proxy); HLE with tools **56.2%** (vendor, proxy)
- AA Agentic Index: **50.1** (AA composite, as listed on the OpenRouter benchmark summary)
- Claw-Eval / ClawProBench, Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- OSWorld: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (AA; `gpqa` 0.9354) — above the rubric's 90% frontier anchor
- HLE: **42.4%** (AA; `hle` 0.4245); HLE-Diamond **20.1%** (AA)
- CritPt: **20.0%** (AA; `critpt` 0.20)
- AA-LCR v1.1: **80.3%** (AA; `lcr` 0.8033); MLCR overall **30.6%** (AA)
- Artificial Analysis Intelligence Index: **not published for this model** (AA's record carries a null index and an empty evaluation list — the model was added to the catalogue for targeted evaluations rather than a full index run). BenchLM-style overall ranking: **no verified public score found**
- AA-Omniscience: accuracy **31.4%**, hallucination rate **34.5%** (non-hallucination **65.5%**) (AA)
- MRCR v2 256K (8-needle): **92.9%** (vendor, Qwen3.8-Max proxy); LongBench v2 **66.3%** (vendor, proxy); IFBench **82.8%** (vendor, proxy)

Coding:

- Artificial Analysis Coding Index: **71.9** (AA composite, as listed on the OpenRouter benchmark summary) — inside the rubric's frontier band
- SciCode: **54.1%** (AA; `scicode` 0.5405) — just under the rubric's 55% frontier anchor
- SWE-bench Pro: **67.7%** (vendor, Qwen3.8-Max proxy); DeepSWE 1.1 **56.6%** (vendor, proxy); FrontierSWE **73.5%** (vendor, proxy); NL2Repo-Bench **55.9%** (vendor, proxy); PaperBench **93.0%** (vendor, proxy); QwenSWEBench **80.7%** (vendor, proxy); QwenQoderBench **58.4%** (vendor, proxy)
- Terminal-Bench 2.1 **82.0%** and Terminal-Bench 4.0 **11.1%** (AA, see above)
- SWE-bench Verified, LiveCodeBench, Vibe Code Bench: **no verified public score found**

Long context:

- No long-context retrieval test is published for this checkpoint by AA. The vendor's Qwen3.8-Max table reports **MRCR v2 256K (8-needle) 92.9%** and **LongBench v2 66.3%** for the hosted product built on the same weights.
- Native window **262,144 tokens**, documented as extensible to 1,010,000 tokens; OpenRouter advertises 1.0M for the served route.

Multimodal:

- **Text only on this checkpoint.** The model card states plainly: "Qwen3.8-2.4T-A95B is a text-only model that requires thinking mode for all interactions. Multimodal inputs are not supported." Vision belongs to the hosted Qwen3.8-Max product, which is a different entry.
- MMMU-Pro, Video-MME, audio benchmarks: **no verified public score found**

Performance profile (AA): output **38.7 tok/s**, time to first token **4.50 s**, time to first answer token **104.95 s**, end-to-end **255.4 s** on a benchmark run; TTFT rises from 1.98 s at 1K-token prompts to 11.70 s at 100K-token prompts; AA also records a total cost of **$378** for the AA-Briefcase evaluation run of this deployment. On OpenRouter the same weights run at 33 tok/s (NovitaAI), 39 tok/s (Alibaba Cloud Int.), 34 tok/s (SiliconFlow) and 109 tok/s (Venice, a quantized 20%-off route).

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). Each dimension cites the evidence that sets it and what caps it.

- **Tool use: 84/100.** Terminal-Bench 2.1 **82.0%** is close to the rubric's ~88% frontier anchor and is the strongest agentic-terminal result in this entry, and Tau3-Banking **49.1%** sits just under the ~50% frontier anchor; GDPval-AA **1615.72 Elo** and AA-Briefcase **1430 Elo** are strong but well under the ~1750 GDPval frontier; AutomationBench-AA **57.2%** and the vendor's Toolathlon Verified **72.5%** / WideSearch **81.9%** (Qwen3.8-Max proxies) support the upper-middle band. Capped below 90 because GDPval stays ~134 Elo short of the frontier figure, because the AA Agentic Index is only **50.1**, and because **Terminal-Bench 4.0 is 11.1%** — the current agentic-terminal bar is the one agentic measurement where this checkpoint shows almost nothing.
- **Reasoning: 87/100.** GPQA Diamond **93.5%** clears the rubric's 90% frontier anchor, HLE **42.4%** clears the 40% anchor, AA-LCR **80.3%** is well above the mid band, MLCR **30.6%** and MRCR v2 256K **92.9%** (vendor proxy) show workable long-horizon recall, and CritPt **20.0%** is the one weak evaluation. Held well below 90 because **AA publishes no Intelligence Index for this model** (the rubric's "Index 60+" frontier anchor is therefore unmet and unmeasurable), because AA-Omniscience accuracy is only **31.4%** with a **34.5% hallucination rate**, and because HLE-Diamond is just **20.1%**.
- **Context window: 78/100.** The native window is **262,144 tokens**, which the rubric places in the 200K–500K band (65–84, with 200K ≈ 70); the documented extension path to 1,010,000 tokens and the 1.0M context advertised on the OpenRouter route put it near the top of that band. It cannot reach the 85–100 band, because the rubric's higher tiers are reserved for a verified 500K–1M window and because **no AA retrieval measurement exists for this checkpoint** — the only retrieval figures are the vendor's Qwen3.8-Max proxies (MRCR v2 256K **92.9%**, LongBench v2 **66.3%**).
- **Multimodal: 15/100.** Text-only: the checkpoint is documented as text-only with no image, video, PDF or audio input and text-only output, which is the rubric's 10–20 band. Vision on the Qwen3.8 family lives in the hosted Qwen3.8-Max product, not in these weights; that product is scored separately.
- **Coding: 85/100.** AA's Coding Index **71.9** is inside the rubric's frontier band (70%+), Terminal-Bench 2.1 **82.0%** is just under the ~85% anchor, and the vendor's Qwen3.8-Max proxies are strong (SWE-bench Pro **67.7%**, DeepSWE 1.1 **56.6%**, FrontierSWE **73.5%**, PaperBench **93.0%**, QwenSWEBench **80.7%**). Capped below 90 because SciCode **54.1%** sits just under the 55% anchor, because **DeepSWE 1.1 at 56.6%** is far short of the rubric's 74% frontier reference, and because no SWE-bench Verified, LiveCodeBench or Vibe Code Bench result is published for the open checkpoint.
- **Cost efficiency: 74/100.** The evaluated route is billed at **$2.00 in / $6.00 out per 1M** with cached input at $0.25 — between the rubric's ~$1.25/$4.25 ≈ 88 anchor and its $3/$15 ≈ 60 anchor, which on the token price alone lands in the high 70s. It is held at 74 because the *measured* cost of the model is far above the headline rate: AA records **38.7 tok/s output**, a **104.95 s** time-to-first-answer-token, a **255.4 s** end-to-end run and a **$378** total cost for its AA-Briefcase evaluation of this deployment, and because thinking cannot be switched off, so every request pays the full reasoning-token bill. Self-hosting removes the token price but not the 2.4T-parameter serving cost.
- **Overall Score: 69.8/100.** (84 + 87 + 78 + 15 + 85) / 5 = 69.8 — best-fit: a genuinely frontier-class open-weight reasoning and agentic-coding model whose one structural weakness is that it is text-only and that its long-context ceiling is the native 256K; deploy it for hard coding, research and professional-writing work on text, and pair it with a multimodal model for image-bearing tasks.

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **Which model the benchmark table belongs to.** The benchmark table shipped in the `Qwen/Qwen3.8-2.4T-A95B` model card is titled "Qwen3.8-Max" — the hosted product built on these weights with vision, non-thinking mode and a 1M default context. The independent AA figures are measured on the **open checkpoint itself** (262K window, text-only, always-thinking). Scoring therefore leans on the AA measurements and uses the vendor table only as a labelled proxy for capabilities AA does not publish (DeepSWE, SWE-bench Pro, MRCR, Toolathlon).
2. **Context window: 262,144 native vs 1,010,000/1.0M advertised.** The model card states "262,144 natively and extensible up to 1,010,000 tokens"; OpenRouter advertises 1.0M; AA measures 262,000. Following the repository's existing convention (for example Nemotron Lightning 262K native scored at 262K, MiMo V2.5 Free's 200K Zen cap scored at 200K), the **native** window is scored.
3. **Terminal-Bench 2.1 at 82.0% versus Terminal-Bench 4.0 at 11.1%.** Both are AA measurements of the same deployment but on very different benchmark versions; both are listed and the 4.0 result is treated as the current agentic-terminal cap on the Tool use score.
4. **GPQA Diamond 93.5% versus Intelligence Index not published.** A single strong evaluation does not make a frontier model; the rubric's index anchor is unmet and unmeasurable for this entry.
5. **Price: $2.00/$6.00 (AA first-party Alibaba, and every OpenRouter provider) versus $2.50/$6.25 (Hugging Face inference).** The AA/OpenRouter rate is the one actually payable on the hosted routes and is the one scored.
6. **License.** The weights are released under a commercial "Qwen3.8-Max License", not Apache-2.0 or another permissive open-source license; AA classifies the model as open-weights with an openness index of 27.8 and no pre- or post-training transparency.

### Notes on identity

- `qwen-3.8-2400b-a95b` (this entry, the 2.4T-A95B **open checkpoint**) is not `qwen-3.8-max` (the hosted API product) and not `qwen-3.8` (the family entry). Same base weights for the first two; different modalities, context defaults and tool stack.
- "2400b" is the catalogued rendering of 2.4T; "A95b" is the 95B active parameter count. The vendor writes the name "Qwen3.8 2.4T A95B".
- There is no free tier, no `*-free` SKU and no OpenCode Zen route for this model; the paid hosted routes are OpenRouter and Qwen Cloud.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-11-12
- Method: public internet research — the official Hugging Face model card and configuration for `Qwen/Qwen3.8-2.4T-A95B`, the Qwen3.8-Max launch blog referenced by that card, the Artificial Analysis model record and its per-evaluation JSON (fetched live on 2026-11-12), the OpenRouter model page for `qwen/qwen3.8-2.4t-a95b` with its AA-sourced benchmark summary and provider table, the OpenCode Zen model and pricing catalogue for route availability, and models.dev for canonical ids. Vendor-vs-independent conflicts are listed explicitly rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Qwen/Qwen3.8-2.4T-A95B — model card and weights (Hugging Face)](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B)
  - [Qwen3.8 Max: A New Bar for Coding and Cowork (Qwen blog, August 2026)](https://qwen.ai/blog?id=qwen3.8)
  - [Qwen3.8 2.4T A95B — Intelligence, Performance & Price Analysis (Artificial Analysis)](https://artificialanalysis.ai/models/qwen3-8-2-4t-a95b)
  - [Qwen: Qwen3.8 2.4T A95B — API Pricing & Benchmarks (OpenRouter)](https://openrouter.ai/qwen/qwen3.8-2.4t-a95b)
  - [Qwen Cloud — managed Qwen3.8 inference](https://www.qwencloud.com)
  - [OpenCode Zen — model list and per-1M pricing](https://opencode.ai/docs/zen)
  - [vLLM recipe for Qwen3.8-2.4T-A95B](https://recipes.vllm.ai/Qwen/Qwen3.8-2.4T-A95B)
- Future sources: add a new file next to this one, e.g. `Qwen3.8_2.4T_A95B.md`, using the same headings.
