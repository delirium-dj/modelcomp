# Gemini 4 Argon — findings by LongCat 2.5 Preview

- Source: Google DeepMind/Gemini 4 Argon (`opencode/gemini-4-argon`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** Google DeepMind's frontier model for complex, long-horizon workflows in software engineering, enterprise knowledge work, and cybersecurity defense. Features an industry-leading 1M output token limit for deep, multi-step problem solving.
- **Provider / access:** OpenCode Zen `opencode/gemini-4-argon`; Google AI Ultra subscribers and paid API customers (after introductory period). Chat Completions API.
- **Release / knowledge:** 2026-09-30
- **IDs:** `opencode/gemini-4-argon` (Zen Free ID exists)
- **Context window:** 1M tokens total (output); up from previous 64K. Verified from official Google blog post.
- **Modalities:** Text, image, video, audio in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-01):** Introductory: $2/1M input, $10/1M output; cached input at 95% off ($0.10/1M). After introductory period: $4/1M input, $20/1M output. Paid tier — no free tier currently available.
- **Architecture:** Proprietary

### Raw benchmarks found

Agent / tool use:

- AutomationBench: **51.3%** (#1 rank, Zapier's benchmark for end-to-end execution across core business functions)
- CWE-bench v1: **68%** (ties for first place, security vulnerability remediation)
- Vals Index: **leading model** (measures economic impact across finance, coding, legal, tax)
- Vals Finance Agent v2: **leading** (multi-step financial research)
- Harvey's Legal Agent Benchmark: **leading** (legal research and drafting)
- Gray Swan IPI: **leading** (indirect prompt injection robustness)
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- DeepSWE v1.1: **77.9%** (state of the art, real-world long-horizon software engineering)
- Omniscience: **42.4** (accuracy metric from third-party comparison)
- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- Artificial Analysis Intelligence Index: no verified public score found

Coding:

- DeepSWE v1.1: **77.9%** (SOTA)
- CWE-bench v1: **68%** (ties for first)
- SWE-bench Verified: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found

Long context:

- Long-context recall: **79.7%** (from third-party comparison with Kimi K3 at 1M window)
- LVBench: **91.7%** (state of the art, long video understanding)

### Normalized scores (1–100)

- **Tool use: 82/100.** #1 on AutomationBench (51.3%), leading on Vals Index, ties for first on CWE-bench v1 (68%). Missing Terminal-Bench, Tau3, GDPval, and Claw-Eval scores prevent a higher tier.
- **Reasoning: 78/100.** Vals Index leadership and DeepSWE SOTA performance imply strong reasoning, but no direct GPQA Diamond, HLE, or MRCR/LCR scores are publicly available. Omniscience 42.4 suggests moderate hallucination resistance.
- **Context window: 95/100.** 1M output tokens is industry-leading. Long-context recall of 79.7% is strong but below the 98%+ threshold for a perfect 100.
- **Multimodal: 92/100.** Text, image, video, and audio input; text output. LVBench 91.7% SOTA for long video understanding. Audio input places it in the top multimodal tier.
- **Coding: 88/100.** SOTA on DeepSWE v1.1 (77.9%), ties for first on CWE-bench v1 (68%). Missing SWE-bench Verified, LiveCodeBench, and SciCode scores.
- **Cost efficiency: 68/100.** Introductory $2/$10 per 1M input/output; standard $4/$20. Mid-range for frontier models — more expensive than flash tiers, below top-tier Opus/Fable pricing.
- **Overall Score: 87/100.** Mean of (82 + 78 + 95 + 92 + 88) / 5 = 87. Best-fit recommendation: top pick for long-horizon coding and enterprise agentic workflows when budget allows; wait for broader API access and more benchmark publications.

---

## Signature

- Provided by: **LongCat 2.5 Preview (opencode/longcat-2.5-preview-free)** — 2026-10-01
- Method: public internet research (official Google DeepMind blog, CNBC, alphaXiv, third-party benchmark comparisons); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
