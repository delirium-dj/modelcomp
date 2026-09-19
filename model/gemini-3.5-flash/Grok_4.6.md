# Gemini 3.5 Flash — findings by Grok 4.6

- Source: Google (`google/gemini-3.5-flash`)
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash
- **Short description:** Google I/O 2026 (2026-05-19) Flash GA for agentic coding and 1M-context workflows. Predecessor to 3.6/3.7/3.8 Flash; not a Zen Free ID.
- **Provider / access:** Gemini API `gemini-3.5-flash` (stable). Chat Completions gateways + native Gemini APIs. Thinking levels supported.
- **Release / knowledge:** **2026-05-19**; Google AI docs FAQ knowledge cutoff **January 2025**.
- **IDs:** `google/gemini-3.5-flash`. No Zen Free ID found.
- **Context window:** 1,048,576 input / 65,536 output (Gemini API).
- **Modalities:** Text, image, audio, video, PDF in; text out. Function calling, computer use preview, search grounding.
- **Pricing (as of 2026-09-19):** **$1.50 / $9.00** per 1M; cache **$0.15**. Batch/Flex half; Priority higher. Paid (product “Free tier” in some Google SKUs is not $0 API).
- **Architecture:** Proprietary closed weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **76.2%** (DeepMind Terminus-2); Vals **74.2%** (BenchLM).
- Tau3-Banking: **no verified public score found**. τ²-bench **95.3%** (BenchLM — different bench).
- GDPval-AA: **1345–1349 Elo** (BenchLM / 3.6 card 3.5 column **1349**).
- OSWorld-Verified: **78.4%** (3.6 card / BenchLM).
- MCP Atlas: **83.6%**; Toolathlon **56.5%** (BenchLM / llm-stats).
- Claw-Eval: **no verified public score found**.

Reasoning / knowledge:

- GPQA Diamond: **92.2–92.7%** (BenchLM AA/Vals). Google card did not publish GPQA.
- HLE: **40.2%** Google card (Gate/BenchLM); AA-HLE **42.7%**.
- LCR / MLCR: **no verified public AA-LCR found**.
- CritPt: **no verified public score found**.
- Artificial Analysis Intelligence Index: **50.2** (BenchLM percent/index row; Fello cites 3.6 at 50 vs 3.1 Pro 46 — 3.5 Flash BenchLM **50.2**).
- Omniscience Accuracy / Hallucination Rate: **51.9% / 60.7%** (BenchLM).

Coding:

- SWE-bench Verified: **no verified public score found**. SWE-Bench Pro **55.1%** (DeepMind).
- LiveCodeBench: **no verified public score found**.
- SciCode: **no verified public score found**.
- Vibe Code Bench: **no verified public score found**.
- DeepSWE v1.1: **37%** (DeepMind 3.6 card, 3.5 Flash column).

Long context:

- MRCR v2 8-needle **77.3%** at 128k average; **26.6%** at 1M pointwise (DeepMind). Window 1M.

### Normalized scores (1–100)

- **Tool use: 80/100.** TB 74–76% is mid (45–60% band would be 50–70; 76% is above mid toward frontier). Caps: GDPval ~1349, missing Tau3/Claw-Eval.
- **Reasoning: 88/100.** GPQA ~92% and HLE ~40–43% meet the frontier floors; Index ~50 caps the 90–100 band.
- **Context window: 95/100.** 1M tier; 1M pointwise MRCR 26.6% is not ≥98% at 512K+.
- **Multimodal: 92/100.** Audio+video+PDF+image in, text out.
- **Coding: 72/100.** DeepSWE 37% and SWE-Pro 55.1% are mid; TB 76% pulls up. Missing LiveCode/SciCode.
- **Cost efficiency: 75/100.** **$1.50 / $9** is worse than $1.25/$4.25 ≈88 and better than $3/$15 ≈60.
- **Overall Score: 85/100.** Mean of (80 + 88 + 95 + 92 + 72) / 5 = 85.4 → **85**. Best-fit: omni Flash from May 2026; prefer later Flash for DeepSWE.

---

## Signature

- Provided by: **Grok 4.6 (xAI/grok-4.6)** — 2026-09-19
- Method: public internet research (DeepMind 3.5/3.6 cards, BenchLM, Gemini API what’s-new, llm-stats, Gate.AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
