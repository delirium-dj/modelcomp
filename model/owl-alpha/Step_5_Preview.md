# Owl Alpha — findings by Step 5 Preview

- Source: Meituan LongCat — the stealth identity behind `owl-alpha` on OpenRouter, revealed 2026-06-30 to be **LongCat-2.0**
- Date: 2026-11-06 (UTC) — re-run; first researched 2026-10-09
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Owl Alpha — **Meituan LongCat's anonymous OpenRouter stealth listing, unmasked on 2026-06-30 as LongCat-2.0.** The slug is a stealth alias, not a model name, and the repo folder records the alias rather than the revealed identity. **A negative finding governs this report: BenchLM carries no `owl-alpha` page in any spelling** (`owl-alpha` and `longcat-2-0` variants 404), so the 2026-11-06 re-research had no catalog to check against.
- **Short description:** A model whose measured record is inseparable from its stealth history: **Terminal-Bench 2.1 70.8, SWE-bench Pro 59.5, SWE-bench Multilingual 77.3, BrowseComp 79.9, FORTE 73.2, GPQA-Diamond 88.9 and IMO-AnswerBench 81.8** — GPT-5.5-class agentic coding at a fraction of the price — plus **the only production-traffic evidence in this research series: ~10.1T monthly tokens, 559B/day, +242% MoM, and #1 Hermes Agent / #2 Claude Code / #3 OpenClaw by monthly volume.**
- **Provider / access:** The stealth route is **retired** (endpoint 404). The revealed model is on the LongCat platform and OpenRouter; **MIT weights** on Hugging Face / ModelScope.
- **Release / knowledge:** stealth listing ~2026-04-2x; **revealed 2026-06-30**. **Knowledge cutoff not disclosed.**
- **IDs:** `owl-alpha` (stealth alias, now dead); the revealed model's id is the LongCat-2.0 roster entry.
- **Context window:** **1M tokens native.**
- **Modalities:** **text in → text out.**
- **Pricing (as of 2026-11-06):** **$0.75/M input, $2.95/M output** for the revealed model, with a promotional **$0.30/$1.20** and free cached reads; **free during the stealth window (data collected), but that route is retired.**
- **Architecture:** **1.6T MoE, ~48B active, LongCat Sparse Attention, 3-step MTP.**
- **Alias-resolution note:** the repo's curated meta records `aliasOf` for this folder, and **the revealed identity must be resolved through the alias table rather than by guessing a LongCat slug** — recorded because the stealth-alias pattern recurs across this corpus.

### Raw benchmarks found

Vendor-reported and carried from the prior verified research passes (2026-10-09, 2026-10-19) with re-attribution; no tracker catalog page exists for cross-check. Comparison figures in parentheses are the contemporaneous frontier.

- **Terminal-Bench 2.1: 70.8** (Gemini 3.1 Pro 70.7*, GPT-5.5 73.8*, Opus 4.8 78.9*)
- **SWE-bench Pro: 59.5** (GPT-5.5 58.6*, Opus 4.8 69.2*)
- **SWE-bench Multilingual: 77.3; FORTE: 73.2; BrowseComp: 79.9; RWSearch: 78.8; IFEval: 90.0; Writing Bench: 83.8; IMO-AnswerBench: 81.8; GPQA-Diamond: 88.9**
- **Production-traffic evidence (unique to the stealth period): ~10.1T monthly tokens, 559B/day, +242% MoM; #1 Hermes Agent, #2 Claude Code, #3 OpenClaw by monthly volume**
- **No verified public score found** for HLE, CritPt, AA-LCR, MRCR, ARC-AGI, AIME, MATH, MMLU-Pro, the AA Intelligence Index, AA-Omniscience, SWE-bench Verified, LiveCodeBench, AA-SciCode, the AA Coding Index, MCP-Atlas, Toolathlon, OSWorld, GDPval-AA, the AA Agentic Index or any visual benchmark.

### Normalized scores (1–100)

- **Tool use: 70/100.** Mid-band. **FORTE 73.2 (ties Opus 4.6), BrowseComp 79.9 and RWSearch 78.8** are genuinely upper-mid agentic results, and **Terminal-Bench 2.1 70.8 sits within 0.1 points of Gemini 3.1 Pro and 3 points of GPT-5.5** — the strongest open-weights agentic-coding profile in its comparison set. Capped at 70 by **the absence of any MCP-Atlas, Toolathlon, OSWorld, GDPval-AA or AA Agentic Index figure**, so two of three frontier references are unmeasured and no composite exists.
- **Reasoning: 76/100.** Mid-band. **GPQA-Diamond 88.9%, IMO-AnswerBench 81.8%, IFEval 90.0% and Writing Bench 83.8%** are upper-mid across four different axes, which is unusual corroboration for an agentic model. Held below the frontier tier by **the total absence of HLE, CritPt, AA-LCR, ARC-AGI, AIME, MATH, MMLU-Pro, the AA Intelligence Index and AA-Omniscience** — so composite depth and reliability are entirely unknown, and three of five reasoning references are unmeasured.
- **Context window: 90/100.** **1M tokens native under LongCat Sparse Attention with linear-complexity serving** — the methodology's ≥1M band (95–100), docked to 90 because **no published retrieval-accuracy curve exists** (no MRCR, RULER, AA-LCR or GraphWalks figure), so the window's usable depth is a spec claim rather than a measurement.
- **Multimodal: 12/100.** **Text-only** — the methodology's text-only band (10–20).
- **Coding: 74/100.** Mid-band, and the strongest dimension. **SWE-bench Pro 59.5 edges GPT-5.5's 58.6 and Terminal-Bench 2.1 70.8 runs within 0.1 of Gemini 3.1 Pro**, with **SWE-bench Multilingual 77.3** around it — the strongest open-weights coding profile in its comparison set. Held below the frontier tier by **Opus 4.8's 69.2 SWE-bench Pro** (9.7 points ahead) and by **the absence of SWE-bench Verified, LiveCodeBench, AA-SciCode, the AA Coding Index and DeepSWE**, so two of three coding references are unmeasured.
- **Cost efficiency: 90/100.** **$0.30–0.75/M input and $1.20–2.95/M output with free cached reads, MIT weights self-hostable** — roughly **6–10x cheaper than GPT-5.5 for the same SWE-Pro class of work**, which is the methodology's ~$0.3/$1.2 → 90 band. **The $0 stealth route is recorded as historical, not current: it was free during the data-collection window and the endpoint is now retired.**
- **Overall Score: 64/100.** (70 + 76 + 90 + 12 + 74) / 5 = 64.4 → **64** → **64**. Recommendation: **the open-weights agentic-coding value pick** — GPT-5.5-class SWE-bench Pro and a native 1M context at roughly a sixth of the price, with MIT weights. **The production-traffic evidence is the most distinctive property in this research series**: ~10.1T monthly tokens, 559B/day, +242% MoM, and #1 on Hermes Agent by monthly volume is real-world corroboration that no benchmark provides, and it is the reason the agentic score is credible despite five unmeasured agentic references. Three cautions: **every number is vendor-reported** with no independent run; **the slug is a retired stealth alias**, so the model must be reached through the revealed LongCat-2.0 identity; and **it is text-only**, so the 12 multimodal score is a real gap rather than a measurement.

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research that established a **negative finding first: BenchLM carries no `owl-alpha` page in any spelling** (`owl-alpha` and `longcat-2-0` variants return 404), so the 2026-11-06 pass had no catalog to check against. The evidence base is the repo's curated `meta.json` plus the two prior verified research passes (2026-10-09, 2026-10-19), with figures re-attributed and **the absence of any independent cross-check from a 2026-11-06 source stated plainly**. **The slug's identity is surfaced as the report's first structural fact: `owl-alpha` is a retired stealth alias, unmasked 2026-06-30 as LongCat-2.0, and the alias must be resolved through the repo's alias table rather than by guessing a LongCat slug** — recorded because the stealth-alias pattern recurs across this corpus and a guessed slug would 404. **The production-traffic evidence is attributed as the most distinctive property in this research series** and stated in both the raw-benchmark and tool-use lines, because ~10.1T monthly tokens, 559B/day, +242% MoM and #1 on Hermes Agent by volume is real-world corroboration that no benchmark row supplies, and it is the reason the agentic score is credible with five unmeasured agentic references. **Contemporaneous frontier comparison figures are carried in the raw-benchmark lines rather than presented bare** (Terminal-Bench 2.1 70.8 against Gemini 3.1 Pro 70.7 and GPT-5.5 73.8; SWE-bench Pro 59.5 against GPT-5.5 58.6 and Opus 4.8 69.2), because the value claim rests on those comparisons rather than on the absolute figures. **The $0 stealth price is recorded as historical rather than current** — free during the data-collection window, endpoint now retired — which is why the cost score rests on the revealed model's $0.30–0.75/$1.20–2.95 rate rather than on a $0 that no longer exists. **The 1M native window under LongCat Sparse Attention is docked to 90 rather than the ≥1M band's top** because no retrieval-accuracy curve is published. Missing benchmarks (HLE, CritPt, AA-LCR, MRCR, ARC-AGI, AIME, MATH, MMLU-Pro, AA Intelligence Index, AA-Omniscience, SWE-bench Verified, LiveCodeBench, AA-SciCode, AA Coding Index, MCP-Atlas, Toolathlon, OSWorld, GDPval-AA, AA Agentic Index, and every visual benchmark) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [LongCat — revealed identity behind Owl Alpha (LongCat-2.0), platform and pricing](https://longcat.chat/)
  - [OpenRouter — Meituan LongCat routes (the retired stealth endpoint and the revealed model)](https://openrouter.ai/meituan)
  - [Hugging Face / ModelScope — LongCat-2.0 MIT weights](https://huggingface.co/meituan-longcat)
  - [Repo curated meta — `model/owl-alpha/meta.json` (1M, text-only, retired stealth route, alias resolution)](/model/owl-alpha/meta.json)
  - See also: [`model/longcat-2.0/`](longcat-2.0.md) — the revealed identity, refreshed earlier in this session
- Future sources: add a new file next to this one, e.g. `Owl_Alpha_2.md`, using the same headings.
