# GPT-OSS-120B — findings by Big Pickle

- Source: OpenAI GPT-OSS-120B (open-weight Apache 2.0; Zen model `opencode/gpt-oss-120b`, "Standard pricing")
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-OSS-120B
- **Short description:** OpenAI's first open-weight flagship reasoning model (Aug 2025), a 117B-parameter MoE with 5.1B active per token that runs on a single 80 GB GPU; near o4-mini performance on core reasoning at very low cost, strong on math/tools, and license Apache 2.0.
- **Provider / access:** OpenAI (weights on Hugging Face `openai/gpt-oss-120b`; also served via OpenAI API, NVIDIA NIM, and OpenCode Zen as `opencode/gpt-oss-120b`). Responses/chat with configurable reasoning effort (low/medium/high), full CoT, structured outputs.
- **Release / knowledge:** 2025-08-05; training-data details undisclosed.
- **IDs:** `opencode/gpt-oss-120b` (Zen), `openai/gpt-oss-120b` (HF), API `gpt-oss-120b`. Zen meta lists "Standard pricing" — no Free tier.
- **Context window:** 128K total (131,072 via YaRN dense-layer extension); max output up to context (~131K per trackers).
- **Modalities:** Text in/out only (Apache 2.0 weights; API also supports web search + Python exec tools).
- **Pricing (as of 2026-09-24):** OpenAI API `gpt-oss-120b` ~$0.09 in / $0.45 out per 1M (anotherwrapper, verified 2026-08-20); open weights = self-host effectively free. Zen cost scored on standard paid pricing.
- **Architecture:** Mixture-of-Experts, 117B total / 5.1B active (36 layers), alternating dense + banded-sparse (128-token window) attention, GQA groups of 8, MXFP4-quantized MoE weights (~61 GiB checkpoint).

### Raw benchmarks found

Agent / tool use:

- Tau-Bench Retail: **67.8%** / Airline: **49.2%** <(OpenAI model card, high reasoning, no tools)>
- Tau2-Bench: **65.8%** <(Artificial Analysis via HF model card)>
- IFBench: **69.0%** <(AA)>
- Terminal-Bench Hard: **22.0%** <(AA)>
- Codeforces Elo (code/tool mode): **2463** no tools / **2622** with terminal <(OpenAI model card — near o4-mini)>
- GDPval-AA / Claw-Eval / BFCL: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **80.1%** no tools / **80.9%** with tools <(OpenAI model card, high reasoning; AA GPQA 78.2%)>
- HLE: **14.9%** no tools / **19.0%** with tools <(OpenAI model card; AA 18.5%)>
- AIME 2024: **95.8%** / AIME 2025: **92.5%** no tools; **97.9%** AIME 2025 with tools <(OpenAI model card; AA Math Index 93.4)>
- MMLU: **90.0%**; MMLU-Pro: **80.8%** <(OpenAI model card / AA)>
- LCR: **50.7%** <(AA)>
- Artificial Analysis Intelligence Index: **60.5**; Coding Index **49.6** <(AA via HF model card)>

Coding:

- SWE-bench Verified: **62.4%** <(OpenAI model card high reasoning, n=477 fixed subset; independent reruns vary 33.6–62.4 by harness)>
- LiveCodeBench: **87.8%** <(AA)>
- SciCode: **38.9%** <(AA; OpenAI lists below 40)>
- Aider Polyglot: **44.4%** <(OpenAI model card)>
- DeepSWE / SWE-Pro: **no verified public score found**

Long context:

- No RULER / MRCR / Multihop retrieval result reported for `gpt-oss-120b`; 128K claimed (YaRN-extended dense layers) only.

### Normalized scores (1–100)

- **Tool use: 72/100.** Tau-Retail 67.8% + Codeforces 2622 with terminal show solid real tools, but Terminal-Bench Hard 22% and IFBench 69% are mid, and no GDPval/BFCL/Claw-Eval exists — capped in the mid-70s.
- **Reasoning: 82/100.** AA Index 60.5 (frontier composite) and AIME 92.5–95.8% are strong, but GPQA 80.1% is well under the 90%+ frontier marker and HLE 14.9% far from 40%+ — solidly mid-high, not elite.
- **Context window: 56/100.** 128K sits in the 100K–200K band (50–64, ~56 at 128K); no long-context retrieval benchmark verifies effective usage (max output 131K is a plus, not scored separately).
- **Multimodal: 15/100.** Text-only in/out per meta and OpenAI docs (per methodology's text-only 10–20 floor).
- **Coding: 72/100.** LiveCodeBench 87.8% and Codeforces Elo 2463 are strong, but SWE-bench Verified 62.4% and SciCode 38.9% are mid — "LiveCode ~80%+ but SciCode <40%" pins it to the 65–75 mid band.
- **Cost efficiency: 95/100.** OpenAI API ~$0.09/$0.45 per 1M ≈ the ~$0.10/$0.20 anchor (97–99) minus a bit for the higher output price; Apache 2.0 self-hosting makes it effectively near-free.
- **Overall Score: 59/100.** Mean of the five non-cost dims (72+82+56+15+72)/5 = 59.4 → **59**. Best as a cheap, self-hostable reasoning/math workhorse; the text-only + 128K + mid SWE-bench profile caps it below generalist flagships.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-24
- Method: public internet research (OpenAI model card/paper, Artificial Analysis, model trackers, Zen meta); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Submission checklist (delete before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/gpt-oss-120b/Big_Pickle.md` — exact assigned stem.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/gpt-oss-120b/`.
4. No raw benchmark invented — "no verified public score found" used where missing.
5. Verified benchmarks exist → saved as `.md` (not `.excluded`).