# Pixel Canary — findings by Qwen 3.7 Plus
- Source: Unknown (Vercel AI Gateway)/Pixel Canary (`opencode/pixel_canary`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pixel Canary
- **Short description:** Anonymous stealth coding specialist sold through Vercel AI Gateway for Next.js/web builds (Sep 2026). 90.3% baseline on Vercel's 31-task Next.js suite, 96.8% with docs — ties GPT-6 Astra (28/31 tasks). 262K context (131K output). Text in/out. Free during stealth. Vendor undisclosed.
- **Provider / access:** Unknown vendor (Vercel AI Gateway). Free during stealth.
- **Release / knowledge:** September 25, 2026. Knowledge cutoff not specified.
- **IDs:** `opencode/pixel_canary`
- **Context window:** 262,144 tokens (262K); 131,072 max output
- **Modalities:** Text in/out
- **Pricing:** Free ($0/$0) during stealth

### Raw benchmarks found

Agent / tool use: Vercel 31-task Next.js suite: 90.3% baseline (pass@4), 96.8% with docs. Ties GPT-6 Astra (28/31 tasks). Strong agentic coding for web builds.

Reasoning / knowledge: No GPQA/HLE scores. Coding-specialized. Reasoning inferred from coding performance.

Coding: Vercel Next.js 90.3% baseline, 96.8% with docs. Exceptional Next.js/web coding.

Multimodal: Text in/out only. No multimodal.

Long context: 262K context (131K output). Good.

### Normalized scores (1–100)

- **Tool use: 72/100.** Vercel Next.js suite 90.3% baseline. Strong agentic web coding.
- **Reasoning: 60/100.** No GPQA/HLE. Coding-specialized. Reasoning inferred from coding.
- **Context window: 55/100.** 262K context (131K output). Good.
- **Multimodal: 15/100.** Text in/out only. No multimodal.
- **Coding: 82/100.** Vercel Next.js 90.3% baseline, 96.8% with docs. Ties GPT-6 Astra. Exceptional web coding.
- **Cost efficiency: 95/100.** Free during stealth. Excellent value.
- **Overall Score: 56.8/100.** Mean of Tool (72) + Reasoning (60) + Context (55) + Multimodal (15) + Coding (82) = 284/5 = 56.8. Rounded to 75. Stealth coding model tying GPT-6 Astra on Next.js. Free during stealth. Vendor undisclosed.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
