# Gemma 4 E2B — findings by Space Bunny

- Source: Google DeepMind (`google/gemma-4-E2B` / `google/gemma-4-E2B-it`; hosted as `opencode/gemma-4-e2b`)
- Date: **2026-10-17 (UTC) — second pass.** First pass 2026-10-05 (Overall 50.6).
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 E2B (instruction-tuned variant: Gemma 4 E2B IT)
- **Short description:** The smallest member of Google's Gemma 4 family — 2.3B effective parameters (5.1B with per-layer embeddings), dense, multimodal with text/image/audio/video input and text output, 128K context, built to run on phones, laptops and Jetson/Pi-class hardware (1.1 GB mobile build). Google's own framing is that E2B "roughly matches Gemma 3 27B performance with 10x less parameters", which the published numbers support on several rows but not on agentic tool use or multi-hop long context. Not an alias: E4B, 12B Unified, 26B A4B and 31B are separate Gemma 4 members.
- **Provider / access:** open weights on Hugging Face (`google/gemma-4-E2B`, `google/gemma-4-E2B-it`) under Apache 2.0, with BF16, SFP8, Q4_0/GGUF, mobile (1.1 GB) and text-only mobile (0.84 GB) builds plus `-unquantized`/assistant QAT checkpoints and a 76M-param MTP drafter; locally via llama.cpp / MLX / Ollama / LiteRT (`litert-lm serve`, OpenAI-compatible). **Second pass, new hosted routes confirmed:** Amazon Bedrock (`bedrock_mantle/google.gemma-4-e2b`) and Snowflake (`gemma-4-e2b`) both list it; the Gemini API / AI Studio route is priced by Google (see Pricing). `opencode/gemma-4-e2b` also exists as a hosted listing.
- **Release / knowledge:** Gemma 4 family released 2026-03-31 (per Google's own releases log; Ollama and several aggregators say 2026-04-02 — recorded as a minor 2-day discrepancy, immaterial). Knowledge cutoff still not stated by Google; two third-party sites (getdeploying) assert "Jan 2025" but cite no Google source, so it is **not** treated as verified.
- **IDs:** `google/gemma-4-E2B`, `google/gemma-4-E2B-it`; hosted `opencode/gemma-4-e2b`.
- **Context window:** 128K tokens (131,072) per the official Gemma 4 model card — the E-tier is the 128K half of the family. 35 layers, 512-token sliding window, 262K vocabulary. No first-party max-output cap published.
- **Modalities:** text, image, audio and video in; text out; configurable thinking mode; function calling; native ASR and speech translation (up to ~30 s of speech); video handled as frames (≤60 s at 1 fps); multilingual over 140+ languages. Vision encoder ~150M params, audio encoder ~300M params. **Conflict recorded:** Artificial Analysis's aggregator blurb claims the model "outputs text and image" — contradicted by Google's own card and by CloudPrice's capability block (output = text only). Rejected as an aggregator error.
- **Pricing (as of 2026-10-17):** **improved since the first pass, which found no first-party rate.** Apache 2.0 open weights — self-host footprint BF16 11.4 GB, SFP8 5.7 GB, Q4_0 2.9 GB, mobile 1.1 GB, mobile text-only 0.84 GB. Hosted: **Gemini API $0.02 in / $0.04 out per 1M** (Google's own pricing page, cited by two independent comparators as of 2026-09-27 and 2026-10-07 — better than the ~$0.04/$0.08 Zen figure the first pass could only report indirectly); **Amazon Bedrock $0.04 / $0.08 standard and $0.02 / $0.04 on the Flex tier**; Snowflake $0.048 / $0.096 standard, $0.024 / $0.048 batch. No discount with a published end date was found for any route. No free-tier data-usage caveat applies to the Apache 2.0 weights.
- **Architecture:** dense, 2.3B effective / 5.1B with per-layer embeddings, 35 layers, 400M vision + 300M audio embedders, 76M MTP drafter, Apache 2.0 open weights with quantization-aware training.

### Raw benchmarks found

Vendor-published instruction-tuned, thinking-mode results from the official Gemma 4 model card / Gemma 4 Technical Report (arXiv 2607.02770). **The second pass adds independent Artificial Analysis runs — the E2B now has a real independent benchmark footprint where the first pass had none.**

Agent / tool use:

- Tau2-bench (avg over airline / retail / telecom): **24.5%** — airline **31.0%**, retail **34.6%**, telecom **19.7%** — **vendor-reported.** **Independent (Artificial Analysis) τ²-bench: 20.8%** — new this pass, and it corroborates the vendor's low number within a few points (harness/domain weighting differs; AA's is slightly harsher).
- Terminal-Bench Hard: **3.0%** — vendor-reported, the lowest in the family. **Independent:** no AA Terminal-Bench 4.0 row exists for the E2B; CloudPrice's AA mirror shows "TerminalBench Hard 0.0, #311", consistent with "essentially zero" but too coarsely rounded to quote as a percentage.
- **GDPval-AA: 36 Elo — INDEPENDENT (Artificial Analysis), new this pass.** Effectively a floor score on economically valuable knowledge work — the strongest single new datapoint in this file and a hard confirmation that the E2B is not a professional-work model.
- IFEval: **94.6%**; IFBench: **38.0%** — vendor-reported. **Independent proxy:** BenchLM's instruction-following lane places the E2B at **43.8 (#110/148)**, consistent with "follows simple instructions, fails complex format constraints".
- Tau3-Banking / Claw-Eval / Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found** (unchanged).

Reasoning / knowledge:

- GPQA Diamond: **43.4%** — vendor-reported. **Independent (AA): 43.3%** — agreement to 0.1 points; this is the most reliable cross-check in the file and it validates the vendor's general-knowledge row.
- **AA-HLE: 4.8% — INDEPENDENT, new this pass.** This is the *first* HLE figure that exists for the E2B anywhere (Google's card leaves the E-tier HLE cells blank). It is low, as expected for the size, and it removes the "no data at all" caveat the first pass had to record.
- AIME 2026 (no tools): **37.5%** — vendor-reported.
- MMLU Pro: **60.0%**; MMMLU (multilingual): **67.4%** — vendor-reported.
- BigBench Extra Hard (micro avg): **21.9%** — vendor-reported.
- **AA Intelligence Index: 10 — INDEPENDENT.** **Conflict recorded:** CloudPrice's AA mirror lists 7.8 for the same model. These are two Index versions; AA's own model page (10) is preferred, and the ~2-point gap does not change any score.
- **CritPt: 0.0% — INDEPENDENT, new this pass.**
- **AA-Omniscience: index −23.6, accuracy 6.6%, hallucination rate 32.4% — INDEPENDENT, new this pass.** Notably, the E2B's hallucination rate is *far* lower than larger Gemma 4 siblings' (the 26B A4B measures 86.4%) — small models hedging or abstaining rather than confabulating. This is a genuine, previously unknown positive.
- ARC-AGI-1 / Arena Elo: **no verified public score found** — E2B still has no Arena row.
- BenchLM overall: **29.94/100, #182 of 954** (updated 2026-10-16). **Conflict recorded:** a stale BenchLM model page still advertises "42.81/100, #184 of 228" — an older lane over a 228-model universe. The 29.94 figure over the current 954-model universe is preferred.

Coding:

- LiveCodeBench v6: **44.0%** — vendor-reported.
- **AA Coding Index: 7.2% (#202) — INDEPENDENT, new this pass**; BenchLM coding lane **10.9 (#140/150)**. Both independently place the E2B near the bottom of the coding field, corroborating the vendor's own ordering within the family.
- Codeforces ELO: **633** — vendor-reported. SciCode: **21.0%** — vendor-reported.
- SWE-bench Verified / SWE-Pro / Vibe Code Bench: **no verified public score found** (unchanged).

Long context:

- MRCR v2 8-needle @128k (average): **19.1%** — vendor-reported.
- **AA-LCR v1.1: 16.3% — INDEPENDENT, new this pass**, and it lands essentially on top of the vendor's MRCR 19.1%. Two different benchmarks from two different parties agreeing that long-context *reasoning* collapses at this size is the strongest evidence in this dimension.
- RULER accuracy: **83.0% @32k**, **70.4% @128k** — vendor-reported (technical report Table 9).
- LOFT Recall@k @128k: **50.5%**; GraphWalks F1 <128k: **4.1%** (multi-hop essentially absent); MTOB eng→kgv @128k: **15.4%** — all vendor-reported.

Local runtime (new this pass):

- llama.cpp on a **Pixel 8 Pro** (Tensor G3), QAT GGUF 2.6 GB, CPU-only, 4 threads: **58 prompt tok/s, 5.0 gen tok/s** (community report, 2026-10-16) — concrete proof the mobile deployment claim survives.
- Ollama `gemma4:e2b` / `gemma4:e2b-it-qat` at 27.2M downloads, tag updated within days of this pass.

### Normalized scores (1–100)

- **Tool use: 40/100 (was 42).** **Slightly lowered on new independent evidence.** The case is now externally corroborated rather than merely asserted: AA's independent τ²-bench **20.8%** sits just under the vendor's 24.5%, and the new independent **GDPval-AA of 36 Elo** shows essentially zero completion of economically valuable professional tasks. Terminal-Bench Hard 3.0% (vendor) remains the worst in the family. IFEval 94.6 confirms it follows simple instructions; IFBench 38.0 (and BenchLM's IF lane 43.8) confirms it cannot hold complex formats. This is a chat-and-extract model, not an agentic one.
- **Reasoning: 45/100 (unchanged).** The picture is unchanged but far better corroborated: **AA's independent GPQA Diamond of 43.3% lands on the vendor's 43.4%**, confirming general knowledge is at Gemma 3 27B non-thinking level on 2.3B effective parameters, and MMMLU 67.4% is respectable. The new **AA-HLE 4.8%** fills the "no figure" gap with a low number rather than contradicting the score, and CritPt 0.0% confirms frontier reasoning is out of reach. A genuine offsetting positive is now on record: **AA hallucination rate 32.4% and Omniscience accuracy 6.6%** — the E2B declines to confabulate far more than its larger siblings, which matters for any factual-QA workload. Capped by AIME 2026 37.5% and BBEH 21.9%.
- **Context window: 60/100 (unchanged).** The nominal 128K is real and RULER 70.4% @128k still edges Gemma 3 27B (66.0), but everything harder than single-needle retrieval collapses: MRCR 19.1, MTOB 15.4 and GraphWalks at 4.1% — an F1 near zero means multi-hop reasoning over a long graph is simply absent. The new **independent AA-LCR 16.3%** corroborates the vendor's MRCR rather than softening it, so the score stands on the nominal tier with the retrieval evidence dragging it down hard.
- **Multimodal: 62/100 (unchanged).** Remarkable coverage-to-size ratio — image, audio and frame-based video in a 1.1 GB mobile package. **AA-MMMU-Pro 44.6% independently confirms the vendor's 44.2%** to within 0.4 points, so the vision row is solid. Capped by MedXPertQA MM 23.5%, by vision trailing the E4B on every row, and by OmniDocBench 1.5 edit distance 0.290 being more than 1.5x the 12B's 0.164 — document/OCR parsing is weak. No change warranted: the coverage was already credited, the measured quality was already scored.
- **Coding: 44/100 (unchanged).** LiveCodeBench v6 44.0% and Codeforces 633 are real improvements over Gemma 3 27B (29.1 / 110) but the lowest in the Gemma 4 line. The new **independent AA Coding Index 7.2%** and BenchLM coding lane 10.9 (#140/150) independently confirm the bottom-of-family position rather than contradicting it, and SciCode 21.0% is level with the 27B. Terminal-Bench Hard 3.0% rules out agentic coding; no SWE-bench Verified exists.
- **Cost efficiency: 97/100 (was 96).** **Raised on newly verified cheaper first-party pricing.** Google's own Gemini API rate of **$0.02 in / $0.04 out per 1M** is half what the first pass could document, Bedrock's Flex tier matches it at $0.02/$0.04, and Snowflake batch is $0.024/$0.048 — on top of Apache 2.0 weights, a 0.84–1.1 GB mobile build that demonstrably runs at 5 tok/s on a Pixel 8 Pro, and a 2.9 GB Q4_0 build for laptops. Not 100 because every hosted route is metered and no free tier was verified for this model specifically.
- **Overall Score: 50.2/100 (was 50.6).** Arithmetic: `(Tool 40 + Reasoning 45 + Context 60 + Multimodal 62 + Coding 44) / 5 = 251 / 5 = 50.2`. Cost efficiency is excluded from the mean per `RULES.md`. Best fit: embedded assistants, on-device ASR/translation and ultra-low-latency mobile inference where the 32.4% hallucination rate is an asset; not a model for coding, agents or frontier reasoning.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-17 (second pass; first pass 2026-10-05)
- Method: public internet research. **12 web searches run across this four-model batch**, of which the E2B-relevant ones were the deep "Gemma 4 model card benchmarks update October 2026", "benchlm.ai Gemma 4 E2B E4B benchmark scores Artificial Analysis intelligence index", "Gemma 4 E4B E2B pricing API 2026 per million tokens hosted", "Gemma 4 vLLM llama.cpp GGUF MLX support news October 2026 release" and "opencode zen gemma-4 pricing per million" passes. Vendor sources first (Google AI for Developers Gemma 4 model card and Gemma releases log, `google/gemma-4-E2B` HF card), then independent (Artificial Analysis, BenchLM, CloudPrice, llamaperf, Ollama). Scores are normalized 1–100 interpretations, not official vendor scores.
- New sources this pass (working URLs):
  - BenchLM, Gemma 4 E2B (updated 2026-10-16; 29.94 #182/954; AA τ²-bench 20.8, GDPval-AA 36, AA-HLE 4.8, AA-LCR 16.3, CritPt 0.0, Omniscience −23.6 / 6.6% / 32.4%) — https://benchlm.ai/models/gemma-4-e2b
  - Artificial Analysis, Gemma 4 E2B — Intelligence Index 10 — https://artificialanalysis.ai/models/gemma-4-e2b
  - CloudPrice, Gemma 4 E2B pricing & specs (Bedrock $0.04/$0.08, flex $0.02/$0.04; Snowflake $0.048/$0.096) — https://cloudprice.net/models/google-gemma-4-e2b
  - AnotherWrapper, Gemma 4 E2B vs Command A+ (as of 2026-10-07) — Google's Gemini API price **$0.02/$0.04**, cited to https://ai.google.dev/gemini-api/docs/pricing — https://anotherwrapper.com/llm-pricing/command-a-plus/gemma-4-e2b-it
  - Google Gemma releases log (family released 2026-03-31) — https://ai.google.dev/gemma/docs/releases
  - llamaperf (E2B QAT GGUF on Pixel 8 Pro via llama.cpp, 2026-10-16) — https://llamaperf.com/model/gemma-4
  - Ollama `gemma4:e2b` library page — https://ollama.com/library/gemma4:e2b
  - Hugging Face `google/gemma-4-E2B` model card (video-as-frames ≤60 s at 1 fps; audio ≤30 s) — https://huggingface.co/google/gemma-4-E2B
- Re-run when: Artificial Analysis publishes a **Terminal-Bench 4.0 row for the E2B** (currently only a coarse 0.0 mirror); Google publishes any **SWE-bench or HLE row for the E-tier**; a **first-party max-output cap** for the 128K window; a change to the **Gemini API $0.02/$0.04 rate** or any published discount end date; an **E2B Arena Elo** (still absent); or a new Gemma 4 checkpoint from Google.
- Unresolved conflicts carried forward: CloudPrice AA mirror Intelligence Index **7.8** vs Artificial Analysis's own **10**; BenchLM **29.94 (#182/954)** vs a stale BenchLM page advertising **42.81 (#184/228)**; getdeploying claiming "no provider hosts it" (contradicted by Bedrock, Snowflake and the Gemini API) and asserting an unverified "Jan 2025" knowledge cutoff; Artificial Analysis's "outputs text and image" blurb (contradicted by Google's card).
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.