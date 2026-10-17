# Pixel Canary — findings by Beam

- Source: Vercel/Pixel Canary, `stealth/pixel-canary`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pixel Canary
- **Short description:** Vercel's stealth coding model (Sep 25, 2026): 262K context, 131K output. Text/image in. Free. Next.js Agent Evals 90.3% baseline (28/31), 96.8% with AGENTS.md (30/31). Retired (Oct 6, 2026, URL 404). Identity unknown (tokenizer points to Qwen derivative).
- **Provider / access:** Vercel AI Gateway `stealth/pixel-canary` (retired); Command Code.
- **Release / knowledge:** Listed 2026-09-25; retired 2026-10-06.
- **IDs:** `stealth/pixel-canary`
- **Context window:** 262,144 tokens; max output 131,072.
- **Modalities:** text, image in; text out; reasoning yes (adjustable); tool calling yes.
- **Pricing (as of 2026-10-17):** Free ($0/$0) during stealth; retired.
- **Architecture:** unknown; tokenizer fingerprint suggests Qwen derivative.

### Raw benchmarks found

Agent / tool use:

- Agentic: no verified public benchmarks beyond Next.js Agent Evals.
- Next.js Agent Evals: **90.3%** baseline (28/31), **96.8%** with AGENTS.md (30/31). pass@4.

Reasoning / knowledge:

- Reasoning: no verified public benchmarks. Next.js Agent Evals only.

Coding:

- Coding: Next.js Agent Evals 90.3% baseline, 96.8% with AGENTS.md. No SWE-bench/LiveCodeBench/Terminal-Bench.

Long context:

- 262K window; no published MRCR.

Multimodal:

- Text/image in; no verified multimodal benchmarks.

### Normalized scores (1–100)

- **Tool use: 50/100.** No verified agentic benchmarks beyond Next.js evals; provisional (retired).
- **Reasoning: 50/100.** No verified reasoning benchmarks; provisional (retired).
- **Context window: 66/100.** 262K window; caps at no published MRCR.
- **Multimodal: 50/100.** Text/image in; no verified multimodal benchmarks.
- **Coding: 58/100.** Next.js Agent Evals 90.3% baseline, 96.8% with AGENTS.md (pass@4); caps at no published SWE-bench/LiveCodeBench.
- **Cost efficiency: 100/100.** Free (retired).
- **Overall Score: 54.8/100.** Provisional mean; low-confidence (single benchmark, retired, anonymous). Self-exclusion candidate (`.md.excluded`) if zero verified benchmarks confirmed. (Has 1 verified benchmark, so not excluded.)

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Vercel official, HuggingFace, Command Code, aiidelist, freeaiapi); no verified public benchmarks beyond Next.js Agent Evals. Scores are provisional. Retired from Vercel (Oct 6, 2026, URL 404).
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings. If zero verified benchmarks confirmed, save as `.md.excluded` instead. (Pixel Canary has 1 verified benchmark, not excluded.)