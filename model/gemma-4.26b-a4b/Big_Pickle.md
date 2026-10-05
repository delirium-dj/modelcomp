# Gemma 4 26B A4B — findings by Big Pickle

- Source: Google DeepMind (`google/gemma-4-26b-a4b-it`). Requested ID `opencode/gemma-4.26b-a4b` is **not on OpenCode Zen** — no matching Zen ID exists
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 26B A4B (MoE)
- **Short description:** Google's mixture-of-experts Gemma 4 variant — **25.2B total parameters with only 3.8B active per token**, so it runs at roughly 4B-dense speed while drawing on a 25.2B knowledge base, with a dedicated ~550M vision encoder for image input. Google ships it alongside the dense 31B flagship and the encoder-free 12B Unified, and it is the family's designated serving workhorse: same 256K context, same reasoning and function-calling stack, at a fraction of the 31B's compute. Top use case: cheap high-throughput image+text agentic work on a single consumer GPU.
- **Provider / access:** Open weights on Hugging Face (`google/gemma-4-26b-a4b-it`, Apache 2.0). Served first-party on Vertex AI as `gemma-4-26b-a4b-it-maas`, and hosted by Amazon Bedrock, Snowflake, DeepInfra, OpenRouter and CloudPrice's aggregated gateways. Google documents compatibility with JAX, Keras, Unsloth and standard Transformers fine-tuning stacks. All hosted routes are OpenAI-compatible Chat Completions. **Not** on OpenCode Zen — the Zen catalog carries no Gemma route.
- **Release / knowledge:** Released **2026-04-02** (models.dev Google entry and the DeepInfra overview; the AA roundup dates Google's announcement to 2026-04-03). Pre-training cutoff **January 2025** (official model card).
- **IDs:** `google/gemma-4-26b-a4b-it` (Google / Vertex AI / DeepInfra), `google/gemma-4-26b-a4b-it-maas` (Vertex AI serving), `google/gemma-4-26b-a4b-it` (OpenRouter), `google-gemma-4-26b-a4b` (CloudPrice canonical). **No Free ID exists on Zen** — `noFreeId` applies. An OpenRouter `:free` variant (`google/gemma-4-26b-a4b-it:free`) does exist at $0/$0 but is quota-capped, so cost is scored on the paid rate.
- **Context window:** **256K tokens natively** (official card; 262,144 in models.dev). OpenRouter publishes an unusually large **235,929 max output** on this route; Google's own max-output figure is not published. CloudPrice and BenchLM both confirm 256K.
- **Modalities:** **Text and image in; text out.** Reasoning: yes, `<|think|>`-triggered. Function calling: yes, natively. Video is listed as an input modality on OpenRouter's route but Google's own per-model table records `Supported Modalities | Text, Image` for this size and restricts **audio to E2B, E4B and 12B only** — so audio is definitively absent here, and video is probable-but-unconfirmed at the model-card level. Variable aspect-ratio and variable-resolution image input (token budgets 70 / 140 / 280 / 560 / 1120). 140+ pre-training languages, 35+ supported out of the box.
- **Pricing (as of 2026-10-05):** OpenRouter **$0.09 in / $0.30 out** per 1M; Amazon Bedrock and Snowflake **$0.13 / $0.40** per 1M (CloudPrice). Self-hosting is **$0** under Apache 2.0. An OpenRouter `:free` route lists $0/$0 but is quota-capped. Paid only as the scored tier — no training-data or privacy caveat applies.
- **Architecture:** Open-weight **MoE**, 25.2B total / **3.8B active**, 30 layers, 1024-token sliding window, 262K vocabulary, **8 active experts out of 128 total plus 1 shared**, and a **~550M vision encoder** (the encoder-based design, unlike the encoder-free 12B Unified). Hybrid attention interleaves local sliding-window with full global attention, the final layer always global, with unified Keys and Values and Proportional RoPE (p-RoPE) on global layers for long-context memory control.

### Raw benchmarks found

Vendor figures are Google's own card (instruction-tuned, thinking-enabled). Third-party figures come from the Artificial Analysis "Reasoning" route, the BenchLM mirror of it, and CloudPrice's leaderboard ranks.

Agent / tool use:

- Tau2 (average over 3 domains): **68.2%** (Google model card)
- τ²-Bench / TAU2: **~40%** (Artificial Analysis, ranked **#209** on CloudPrice). Same benchmark family as Google's row, and roughly 28 pts lower — the same vendor/third-party divergence seen on the 12B Unified.
- TerminalBench Hard: **~30%** (Artificial Analysis, ranked **#130** on CloudPrice)
- Function calling: **supported**, native per CloudPrice capabilities; no published function-calling accuracy score (no BFCL-v4 figure found)
- GDPval-AA / OSWorld / AutomationBench / Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **82.3%** (Google card) / **~80%** (Artificial Analysis, **#163** on CloudPrice)
- HLE: **8.7% no tools** / **17.2% with search** (Google card) / **~20%** (Artificial Analysis, **#139**)
- MMLU-Pro: **82.6%** (Google card; BenchLM Knowledge lane 36.4, **#109 of 169**)
- MMMLU: **86.3%** (Google card)
- AIME 2026 no tools: **88.3%** (Google card) — the family's second-best math result behind the 31B's 89.2%
- BigBench Extra Hard: **64.8%** (Google card)
- IFBench: **~70%** (Artificial Analysis, **#47** of 124 — a strong percentile)
- AA-LCR: **~70%** (Artificial Analysis, **#159** on CloudPrice)
- Artificial Analysis Intelligence Index: **26** (current AA model page) / **17** on AA's v4.3.2 comparison view / **16.7 #199** on CloudPrice / **31** in AA's April 2026 launch article. The spread is index-version drift, not five measurements — v4.3.2 folds in agentic evaluations (AA-Briefcase v1.1, GDPval-AA v2.1, AutomationBench-AA, Terminal-Bench 4.0) that the earlier composite did not.
- BenchLM overall: **57.15, ranked #90 of 225** from 4 source-displayable rows; independent public score 46.25 / 46.16 on two comparison pages. Lanes: Reasoning 67.4 (unranked, 2 rows), Instruction Following **87.3 (#31 of 124)**, Multimodal 45.2 (**#43 of 50**).
- CritPt / Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- LiveCodeBench v6: **77.1%** (Google card)
- Codeforces ELO: **1718** (Google card)
- Coding Index: **39.3**, ranked **#99 of 122** (Artificial Analysis); BenchLM Coding lane 34, **#84 of 143**
- SciCode: **~40%** (Artificial Analysis, **#162** on CloudPrice)
- SWE-bench Verified / SWE-Pro / DeepSWE / Vibe Code Bench: no verified public score found

Long context:

- **AA-LCR: ~70%** (Artificial Analysis, **#159** on CloudPrice) — the strongest retrieval figure of any Gemma 4 size on this source
- **MRCR v2 8-needle @ 128K (average): 44.1%** (Google card). Family: 31B Dense 66.4%, 12B Unified 43.4%, E4B 25.4%, E2B 19.1%
- Throughput: **105.1 tok/s** output, **#112** (Artificial Analysis / CloudPrice)

Multimodal (for the scoring dimension):

- MMMU-Pro: **73.8%** (Google card; BenchLM **#43 of 50**). Family: 31B 76.9%, 12B Unified 69.1%, Gemma 3 27B 49.7%
- MATH-Vision: **82.4%**
- OmniDocBench 1.5 (average edit distance, lower is better): **0.149**. Family: 31B 0.131, 12B Unified 0.164, E4B 0.181
- MedXPertQA (MM): **58.1%**
- Video input: listed as a supported input modality by OpenRouter for this route; Google's per-model table does not confirm it for the 26B A4B specifically, and no video benchmark (Video-MME, LVBench) was published for this size

### Normalized scores (1–100)

- **Tool use: 60/100.** Google's Tau2 average of **68.2%** is the strongest single agentic number in this family and sits comfortably in the methodology's 50–70 mid band, backed by native function calling. The independent runs pull it down: **TerminalBench Hard ~30%** is below the 45–60 mid band on the primary anchor, and AA's τ²-Bench lands near 40% against Google's 68.2% — the same ~28-pt vendor/third-party gap the 12B Unified shows, which suggests Google's Tau2 column is measured on friendlier settings across the whole card. With no GDPval-AA, no Claw-Eval and no BFCL-v4 figure to arbitrate, the score sits mid-band rather than crediting the vendor reading at face value.
- **Reasoning: 66/100.** Just above the 55–65 mid band, and the strongest Gemma 4 reasoning-per-parameter result outside the 31B: GPQA Diamond **82.3%** clears the 80% marker, AIME 2026 at **88.3%** is near-frontier math, MMMLU 86.3%, and AA-LCR around 70% plus IFBench ~70% at **#47 of 124** are real strengths. Held well below 70 because **HLE is 8.7% without tools / 17.2% with search** against a 40% frontier threshold, MRCR at 128K is only 44.1%, and the AA Intelligence Index reads 17–31 depending on version — below the 60+ frontier and straddling the bottom of the 20–35 mid band.
- **Context window: 74/100.** Native 256K places it in the 200K–500K tier above the 200K = 70 anchor, and it has genuine measured retrieval rather than a bare spec claim: **AA-LCR ~70% (#159)**, the best of any Gemma 4 size on that source. Not higher because the only window-level retrieval test is MRCR v2 8-needle at **44.1%** — mid-family, well below the 31B's 66.4% — there is no ≥512K measurement anywhere, and the methodology reserves its top bands for measured ≥98% retrieval at 512K+.
- **Multimodal: 76/100.** Image input with a real ~550M vision encoder puts it above the 60–70 image-only band, and OpenRouter lists **video** among this route's input modalities, which would place it in the 75–90 video band. Scored at the bottom of that band because the evidence is thin and mixed: Google's own per-model table records `Supported Modalities | Text, Image` for the 26B A4B specifically, **audio is explicitly absent** (Google restricts it to E2B/E4B/12B), no video benchmark was ever published for this size, and quality is mid-family — MMMU-Pro 73.8% and MedXPertQA MM 58.1% both trail the 31B, while OmniDocBench 0.149 is genuinely good on documents.
- **Coding: 68/100.** In the 65–75 mid band. **LiveCodeBench v6 77.1%** and **Codeforces ELO 1718** are solid for a model activating only 3.8B parameters per token, and the Coding Index of **39.3 (#99)** is a respectable middle-of-the-table placement. Capped inside the band by **SciCode at ~40%**, sitting exactly on the methodology's mid-band marker rather than clearing it, and by the total absence of repo-level patch evidence — no SWE-bench Verified, no SWE-Pro, no DeepSWE and no Vibe Code Bench figure exists for this checkpoint. Google calls out "enhanced coding and agentic capabilities" and multi-token prediction (up to 3.1× faster inference per Wavenetic's May 2026 analysis), but that is speed, not accuracy.
- **Cost efficiency: 98/100.** OpenRouter **$0.09 / $0.30** per 1M is inside the methodology's ~$0.10/$0.20 = 97–99 band, Bedrock and Snowflake sit at $0.13/$0.40, and Apache 2.0 open weights make self-hosting $0 on roughly a 26B-class GPU budget. Not 100: there is no full-rate free hosted tier — the OpenRouter `:free` variant is quota-capped, so the scored rate is the paid one, and that reasoning is consistent across the Gemma 4 folders in this repo.
- **Overall Score: 69/100.** Half-up mean of 60 / 66 / 74 / 76 / 68. Best fit: the value pick for image+text agentic work at 4B-active inference speed and 256K context, where it beats the 31B on cost and the 12B Unified on agentic and retrieval evidence — but validate tool use in your own harness first, since Google's Tau2 column and the independent TerminalBench-Hard run disagree by a wide margin.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-10-05
- Method: public internet research (official `google/gemma-4-12B` Hugging Face model card read in full for the six-model family comparison table covering the 26B A4B column, Google's Gemma 4 model overview and release pages, the DeepInfra Gemma 4 overview, Artificial Analysis's Gemma 4 26B A4B (Reasoning) model page and its v4.3.2 comparison views, BenchLM profile and comparison pages, CloudPrice spec/leaderboard/pricing records for the 26B A4B and the wider Gemma family, and models.dev API records across Google and OpenRouter). Vendor and third-party numbers are reported side by side rather than reconciled; every gap is stated as a gap. Scores are normalized 1–100 interpretations per `../../model-comparison.md`, not official vendor scores.
- Known caveats: the Tau2 row differs by ~28 pts between Google's card and Artificial Analysis and the same divergence appears on the 12B Unified, which points to a harness or settings difference rather than a one-off error; the AA Intelligence Index reads anywhere from 17 to 31 for this model purely as a function of which index version is quoted (v4.3.2 adds agentic evaluations), so any single figure is misleading without its version; video input is asserted by OpenRouter but denied by Google's per-model table and never benchmarked; the AA figures come from the "Reasoning" route, which may not be identical to `gemma-4-26b-a4b-it` under Google's own settings; and this folder's `meta.json` is a stale auto-scaffold (it records "128K total" and "Text in/out" and is not marked `scaffolded`), understating both the context and the modality coverage.
- Future sources: add a new file next to this one, e.g. `Gemma_4_31B.md`, using the same headings.