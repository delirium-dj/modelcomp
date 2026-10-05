# Gemma 4 12B Unified — findings by Space Bunny

- Source: Google (`gemma-4-12B` / `gemma-4-12B-it`; hosted as `opencode/gemma-4.12b-unified`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 12B Unified (instruction-tuned variant: Gemma 4 12B Unified IT)
- **Short description:** Google's encoder-free, unified multimodal 12B dense model from the Gemma 4 family — the "Unified" designation refers to the architecture (no separate vision/audio encoders; raw image patches and audio waveforms are projected straight into the LLM embedding space). Released as the mid-sized bridge between the edge E4B and the 26B A4B MoE, positioned for on-device multimodal agentic work that runs in 16 GB. It is not an alias of another entry in this comparison: E2B/E4B/26B-A4B/31B are separate Gemma 4 members.
- **Provider / access:** open weights on Hugging Face (`google/gemma-4-12B`, `google/gemma-4-12B-it`) under Apache 2.0, with BF16, SFP8, Q4_0/GGUF and `-w4a16-ct` compressed-tensor builds plus a dedicated MTP drafter for speculative decoding; locally servable via `litert-lm serve` (OpenAI-compatible), llama.cpp, MLX, Ollama, Unsloth. Also listed as a hosted model at `opencode/gemma-4.12b-unified`.
- **Release / knowledge:** released 2026-06-03; QAT checkpoints followed 2026-06-05. Knowledge cutoff not stated in the reviewed model card.
- **IDs:** `google/gemma-4-12B`, `google/gemma-4-12B-it`; hosted id `opencode/gemma-4.12b-unified`.
- **Context window:** 256K tokens (262,144) per the official Gemma 4 model card / HF model card property table. 48 layers, 262K vocabulary. No separate max-output figure is published in the reviewed sources.
- **Modalities:** text, image, audio and video in; text out; thinking mode (reasoning traces before the answer); tool calls / function calling supported; vision embedder 35M params projecting 48×48×3 RGB patches; audio sliced into 40 ms / 640-float frames at 16 kHz.
- **Pricing (as of 2026-10-05):** open weights under Apache 2.0 — self-hosting cost is compute only (BF16 weights ≈ 24–27 GB, Q4_0 ≈ 6.7 GB, SFP8 ≈ 13.4 GB). The hosted `opencode/gemma-4.12b-unified` listing is described only as "Standard pricing"; **no verified public per-token rate was found**, so no token price is claimed here. No free-tier data-usage caveat applies to the Apache 2.0 weights.
- **Architecture:** 11.95B total parameters, dense (not MoE), decoder-only transformer using the same advanced decoder structure as Gemma 4 31B Dense; 1,000M embedder params; encoder-free multimodal path; MTP drafter 400M params; trained from scratch on the Gemma 4 recipe with quantization-aware training.

### Raw benchmarks found

All figures are vendor-published instruction-tuned, thinking-mode results from the official Gemma 4 model card / Gemma 4 Technical Report (arXiv 2607.02770) unless noted. The model card publishes no Arena Elo for the 12B (only 31B at 1451 and 26B-A4B at 1438 are listed).

Agent / tool use:

- Tau2-bench (average over airline / retail / telecom): **69.0%** — airline **75.0%**, retail **77.6%**, telecom **54.4%** (Gemma 4 model card; technical report splits the three domains). Gemma 4 31B: 76.9% avg; Gemma 4 26B-A4B: 68.2%.
- Terminal-Bench Hard: **18.0%** (Gemma 4 Technical Report Table 5). Compare Gemma 4 31B 36.0, 26B-A4B 14.0, Gemma 3 27B 4.0.
- IFEval: **97.2%**; IFBench: **74.0%** (instruction-following / format compliance).
- Tau3-Banking / GDPval-AA / Claw-Eval / Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**.

Reasoning / knowledge:

- GPQA Diamond: **78.8%** (no tools). Gemma 4 31B 84.3, 26B-A4B 82.3, Gemma 3 27B 42.4.
- MMLU Pro: **77.2%**; MMMLU (multilingual): **83.4%**.
- AIME 2026 (no tools): **77.5%** — the strongest reasoning datapoint for a 12B; Gemma 4 31B 89.2, 26B-A4B 88.3.
- BigBench Extra Hard (micro avg): **53.0%**.
- HLE: **5.2%** no tools — a clear weak spot; Gemma 4 31B 19.5, 26B-A4B 8.7. No HLE-with-search figure is published for the 12B.
- LCR / MLCR / CritPt / Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**. No Arena Elo for the 12B.

Coding:

- LiveCodeBench v6: **72.0%** (Gemma 4 31B 80.0, 26B-A4B 77.1, Gemma 3 27B 29.1).
- Codeforces ELO: **1659** (31B 2150, 26B-A4B 1718).
- SciCode: **38.0%** (31B 43.0, 26B-A4B 40.0).
- SWE-bench Verified / SWE-Pro / Vibe Code Bench: **no verified public score found**.

Long context:

- MRCR v2 8-needle @128k (average): **43.4%** (31B 66.4, 26B-A4B 44.1, E4B 25.4).
- RULER accuracy @32k: **96.4%** (31B 96.8, 26B-A4B 97.3). No RULER figure published above 32k in the reviewed sources, so behaviour near the 256K limit is unmeasured.

### Normalized scores (1–100)

- **Tool use: 74/100.** Tau2 average 69.0% (retail 77.6, airline 75.0) is competitive with the 26B MoE's 68.2% and only ~8 points behind the 31B, plus 97.2 IFEval / 74.0 IFBench on instruction compliance. Capped by Terminal-Bench Hard at just 18.0% — real multi-step terminal agentry is the weak leg — and by the total absence of Tau3, MCP-Atlas or Claw-Eval evidence.
- **Reasoning: 76/100.** GPQA Diamond 78.8% and AIME 2026 77.5% are genuinely strong for 12B, and MMMLU 83.4% shows real multilingual breadth. Held back by HLE no-tools at only 5.2% and BBEH 53.0%, i.e. frontier-level expert knowledge is thin, and no independent third-party rerun exists.
- **Context window: 85/100.** 256K tokens is a real working window (RULER 96.4% @32k) but a quarter of the 1M-class tier; MRCR @128k at 43.4% shows retrieval degrades well before the nominal limit, and nothing is published beyond 32k on RULER.
- **Multimodal: 82/100.** Unusually broad coverage for the size — image (MMMU Pro 69.1, MATH-Vision 79.7, InfographicVQA 88.4, OmniDocBench 1.5 edit distance 0.164), audio (CoVoST 38.5 excluding Chinese, FLEURS 0.069) and video via the frame path — all natively in one encoder-free decoder. Capped by MedXPertQA MM at 48.7% on medical imagery and by vision trailing the 26B-A4B on multi-step visual reasoning.
- **Coding: 78/100.** LiveCodeBench v6 72.0% and Codeforces 1659 put it within striking distance of the 26B A4B (77.1 / 1718) at 12B dense, and SciCode 38.0 shows real scientific-code ability. No SWE-bench Verified, SWE-Pro or Vibe Code Bench figure is published, and Terminal-Bench Hard 18.0% caps end-to-end agentic coding.
- **Cost efficiency: 92/100.** Apache 2.0 open weights mean near-zero marginal token cost when self-hosted, and the Q4_0 build fits ~6.7 GB so it runs on ordinary consumer hardware. Not 100 because the hosted route is paid and no public per-token rate is documented for it.
- **Overall Score: 79.0/100.** The best capability-per-byte multimodal model in this comparison — a 12B dense checkpoint that runs on a laptop and still clears 78.8 GPQA-D, 72.0 LiveCodeBench and 69.0 Tau2; best fit for local multimodal agents and fine-tuning, not for frontier expert reasoning.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-05
- Method: public internet research (Google AI for Developers Gemma 4 model card, Hugging Face `google/gemma-4-12B` model card, Gemma 4 Technical Report arXiv 2607.02770, Google launch and developer-guide posts); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.