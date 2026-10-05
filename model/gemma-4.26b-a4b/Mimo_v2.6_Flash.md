# Gemma 4 26B-A4B — findings by Mimo v2.6 Flash

- Source: Google DeepMind (`gemma-4.26b-a4b`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 26B-A4B
- **Short description:** Google DeepMind's open MoE (26B total, 3.8B active) multimodal model — mid-tier Gemma 4 with frontier-adjacent math/reasoning scores, 256K context, text/image/video input, aimed at consumer GPUs and workstations.
- **Provider / access:** Open weights (Apache 2.0, Gemma 4 license) via Hugging Face `google/gemma-4` collection and Kaggle; local runtimes llama.cpp / LiteRT-LM (OpenAI-compatible `serve`) / vLLM / SGLang / MLX / Ollama / LM Studio; Google Cloud Vertex Model Garden. Free (open weights).
- **Release / knowledge:** Gemma 4 family released 2026-06-03 (Google Developers Blog launch post + technical report arXiv:2607.02770); knowledge cutoff not published.
- **IDs:** `google/gemma-4-26B-A4B` (pre-trained) and `google/gemma-4-26B-A4B-it` (instruction-tuned), per the Gemma 4 HF collection naming. No OpenCode Zen Free ID found in this research.
- **Context window:** 256K tokens (HF README: small E2B/E4B = 128K, medium 12B / 26B-A4B / 31B = 256K); max output not published; eval thinking budget Nmax = 280K total tokens (light 40K / medium 120K / heavy 280K tiers on related Gemma 4 models).
- **Modalities:** text, image (variable aspect/resolution), video in; **audio input NOT native on 26B-A4B** (native audio only on E2B/E4B/12B — medium sizes use a separate 550M vision encoder); text out; thinking mode with configurable effort; native function calling (tool calls).
- **Pricing (as of 2026-10-05):** free — Apache 2.0 open weights; runs on consumer GPU workstations (quantized checkpoints); paid via cloud endpoint hosts (no verified Zen free ID).
- **Architecture:** MoE decoder-only transformer — 26B total parameters, 3.8B activated per token; hybrid 5:1 local sliding-window / global attention with p-RoPE, KV-cache sharing, keys-as-values in global layers (up to 37.5% smaller global KV cache); 550M-parameter vision encoder (medium tier) feeding raw patches through the shared decoder; autoregressive multi-token prediction (MTP) drafter head for speculative decoding.

### Raw benchmarks found

> Measured numbers with (source, harness) for traceability. Gemma 4 Technical Report (arXiv:2607.02770), greedy decode, thinking on, Nmax=280; 26B-A4B column verified against Table (31B / 26B-A4B / 12B / E4B / E2B) headers.

Agent / tool use:

- MCP Mark / Toolathlon / Tau-bench / OSWorld / Claw-Eval: **no verified public score found**
- Native function calling documented (Gemma 4 `<tool>` formatting); no published tool-accuracy suite — see Coding for Aider Polyglot

Reasoning / knowledge:

- GPQA Diamond: **88.7** <(tech report, 26B-A4B column)>
- MMLU-Pro: **82.7** · MMLU: 90.4 · BBH: 95.4 <(same table)>
- AIME: **94.9** · HMMT: 94.9 · Math Olympiad Bench: 92.4 · MGSM: 95.7 <(same table)>
- HLE / Artificial Analysis Intelligence Index: **no verified public score found**

Coding:

- LiveCodeBench: **74.3** <(tech report, 26B-A4B column)>
- Aider Polyglot: **84.6** <(tech report, 26B-A4B column)>
- SWE-bench Verified / SWE-bench Pro / terminal-bench / Vibe Code Bench / ReactBench: **no verified public score found**

Long context:

- 256K window documented (medium tier); MRCR / RULER / NIAH retrieval quality: **no verified public score found** in the report

Multimodal (extras):

- MMMU-Pro: **73.2** · MATH-Vision: 80.3 · InfographicVQA: 77.8 · MedXPertQA-MM: 55.7 · OmniDocBench: 0.269 (lower better) <(tech report vision Table 12, 26B-A4B column @280K)>
- Audio benchmarks: N/A — 26B-A4B has no native audio input

### Normalized scores (1–100)

- **Tool use: 60/100.** Aider Polyglot 84.6 plus documented native function calling show agentic coding ability, but with no verified MCP / Toolathlon / Tau numbers it stays at 60 (missing evidence never drags below 50; no frontier reference hit to justify more).
- **Reasoning: 87/100.** GPQA 88.7 is in the frontier band and AIME/HMMT 94.9 beat the 92+ frontier math references; MMLU-Pro 82.7 sits below the 86+ reference and no HLE / AA index exists → 87.
- **Context window: 90/100.** 256K sits between the 128K (85) and ≥1M (95) tiers → 90.
- **Multimodal: 85/100.** Text/image/video in with strong vision scores (MMMU-Pro 73.2, MATH-Vision 80.3, InfographicVQA 77.8) but no native audio input caps it below the 90–100 audio tier → 85 (full-multimodal 70–90 band, top end).
- **Coding: 76/100.** LiveCodeBench 74.3 (>55) and Aider Polyglot 84.6 (≥60) clear the mid floor and edge the 12B column (71.9 / 83.4), but no SWE-bench / terminal-bench evidence caps it below 82 → 76.
- **Cost efficiency: 98/100.** Free rules apply (Apache 2.0 open weights, quantized checkpoints on consumer GPUs) but no verified OpenCode Zen Free ID was found → 98 rather than flat 100.
- **Overall Score: 80/100.** (60+87+90+85+76)/5 = 79.6 → 80 — best fit: free mid-size MoE reasoner/multimodal (video in, 256K) with near-frontier GPQA and AIME; not a frontier tool-use or SWE pick.

---

## Signature

- Provided by: **Mimo v2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-10-05
- Method: public internet research (Gemma 4 Technical Report arXiv:2607.02770 HTML, Gemma 4 model card, HF README, Google Developers Blog); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.