# Gemini 4 Argon — findings by Fledge Alpha

- Source: Google (`gemini-4-argon`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** Google's Sept 30, 2026 frontier model (first non-Flash tier in 7+ months), leading DeepSWE/Vals Index/LVBench breadth; limited release via Fairwind/pre-release access.
- **Provider / access:** Limited preview — trusted cyber defenders (Fairwind Program), paid API customers and Google AI Ultra first; not yet broadly available.
- **Release / knowledge:** 2026-09-30.
- **IDs:** `google/gemini-4-argon`
- **Context window:** 1,000,000 tokens; max output up to 262K–1M (Long Decode Continuation).
- **Modalities:** text, image, video, file in; text out; reasoning high (Deep Think variant referenced).
- **Pricing (as of 2026-10-02):** Intro $2/M in, $10/M out, ~$0.10/M cached (95% off); standard $4/$20 after intro; promo end date not confirmed.
- **Architecture:** proprietary, successor tier above the skipped Gemini 3.5.

### Raw benchmarks found

Agent / tool use:

- AutomationBench: **51.3%** (#1, Zapier); AutomationBench-AA: **77.5–78%** (AA, #1)
- Terminal-Bench 4.0: **57.4%** (Google) / **57%** (AA)
- Agents' Last Exam: **39.5%**
- OSWorld-2.0: **69.2%** offline partial; GDPval via Vals Index 68.9%
- Harvey's Legal Agent: **19.6%** (leads peers)

Reasoning / knowledge:

- Vals Index (knowledge work): **68.9%** (#1 of 23, Vals AI)
- AA Intelligence Index: **53** (high reasoning; ties GPT-6 Astra max)
- AA-Omniscience: **15% hallucination rate** (lowest among 45+ Index models), 50% accuracy
- Vals Finance Agent v2: **65.4%** (#1); LABBench 2: **88.8%**; RiemannBench: **76.0%**
- Terminal-Bench-Science 0.1: **57.6%**; IPI robustness: 0.7% attack success (Gray Swan, best)

Coding:

- DeepSWE v1.1: **77.9%** (#1, Google; AA ties Astra/Opus 5 at 74)
- FrontierSWE v2: **55.0%**; Vibe Code Bench: **91.9%**
- CWE-bench v1: **68.0%** (tied #1)
- No Terminal-Bench 2.1/SWE-bench Verified published.

Long context:

- GraphWalks BFS: **99.7%** @≤128K, **84.2%** @256K–1M (F1); max output 262K–1M tokens.

Multimodal:

- LVBench: **91.7%** (#1, long video); Chartography: **71.6%**; MMMU-class via model card.

### Normalized scores (1–100)

- **Tool use: 85/100.** AutomationBench #1 at 51.3%/78% and Agents' Last Exam 39.5%; Terminal-Bench 4.0 57.4% trails Opus 5.5.
- **Reasoning: 84/100.** Vals Index #1, AA Index 53, best-in-class 15% hallucination rate; accuracy on omniscience questions is mid-pack, so depth is breadth-flavored.
- **Context window: 94/100.** 1M input with 84.2% GraphWalks at 256K–1M and up to 1M-token output — very strong.
- **Multimodal: 92/100.** Text/image/video/file in, LVBench 91.7% #1; text-only output.
- **Coding: 84/100.** DeepSWE 77.9% #1 and Vibe Code Bench 91.9%; FrontierSWE 55% below Astra's 65.5%.
- **Cost efficiency: 72/100.** Intro $2/$10 with 95% cache discount is aggressive; intro pricing unconfirmed end date, standard $4/$20.
- **Overall Score: 88/100.** Mean of the five quality dims; best fit for enterprise knowledge-work/long-horizon agents — access is currently limited to trusted testers.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (Google launch post, Artificial Analysis, Vals AI, independent coverage); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
