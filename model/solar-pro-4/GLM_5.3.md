# Solar Pro 4 — findings by GLM 5.3

- Source: Upstage (`solar-pro4`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Pro 4
- **Short description:** Upstage's agentic LLM (released 2026-08-11) built for multi-step real work — tool calling, terminal tasks, and long-document reasoning with strong Korean/Japanese coverage and evidence-grounded (anti-hallucination) behavior. Top use case: document-heavy office agent work (Excel/Word/PowerPoint deliverables).
- **Provider / access:** Upstage Console API `solar-pro4` (OpenAI-compatible); OpenRouter `upstage/solar-pro4`; Hermes Agent (Nous Research); Upstage Studio; dedicated/on-prem deployment available.
- **Release / knowledge:** 2026-08-11; knowledge cutoff not stated publicly.
- **IDs:** `upstageai/solar-pro-4` (no OpenCode Zen Free ID; paid tier).
- **Context window:** 512K with up to 128K output tokens (Upstage launch post).
- **Modalities:** text in / text out (English, Korean, Japanese input and output); reasoning yes (reasons by default with visible trace; effort dial high/low); tool calls yes; JSON mode not separately verified.
- **Pricing (as of 2026-09-25):** $0.30 in / $1.20 out per 1M, cached input $0.06 (Upstage pricing; launch promo 90% off ran through 2026-09-10).
- **Architecture:** proprietary (API-only; sibling Solar Open 2 is the open-weights alternative); parameters undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **57.0%** (BenchLM + Upstage launch post)
- Tau3-Banking: **23.0** (Upstage launch post, AA-run)
- GDPval-AA v2: **38.8 normalized** (Upstage launch post, AA-run — ≈1276 Elo equivalent; Solar Open 2: 31.4)
- BrowseComp: **49.2%** (BenchLM + vendor)
- MCP Atlas: **61.4%** (BenchLM + vendor); APEX-Agents **18.7%** (BenchLM + vendor)
- Claw-Eval / Toolathlon / SWE Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **89.0%** (BenchLM; AA-GPQA 89.1%)
- HLE: **AA-HLE 29.2%** (BenchLM — below the 40% frontier line)
- LCR / MLCR: AA-LCR **71.0%** (BenchLM + vendor)
- CritPt: **5.4%** (BenchLM)
- AIME26: **95.3%** (BenchLM + vendor)
- Artificial Analysis Intelligence Index: **28.1** (BenchLM)
- Omniscience: Index **-0.8**, Accuracy **18.9%**, hallucination-rate field **24.4%** (BenchLM; label ambiguous vs AA's "Non-Hallucination Rate" — flagged, not double-counted; vendor emphasizes abstention-by-design instead)
- MMLU-Pro **86.3%**, KMMLU-Pro **79.2%**, KBL (law) **77.5%**, KorMedMCQA **93.2%**, Ko-GDPval **87.3%**, Arena-Hard v2 (Japanese) **81.9%** (BenchLM / vendor table)

Coding:

- SWE-bench Verified (OpenHands): **70.6%** (BenchLM + vendor)
- LiveCodeBench: **87.8%** (BenchLM + vendor)
- AA-SciCode: **44.6%** (BenchLM)
- Design Arena Website Elo: **1187** (BenchLM)
- SWE-bench Pro / Vibe Code Bench / DeepSWE: **no verified public score found**

Long context:

- AA-LCR 71.0% (BenchLM + vendor) at the 512K window — the vendor's flagship long-document claim; no MRCR/RULER per-length table.

### Normalized scores (1–100)

- **Tool use: 58/100.** TB 2.1 57% and MCP Atlas 61.4% are mid-band, GDPval-AA v2 38.8 normalized is upper-mid, but Tau3-Banking 23% and APEX-Agents 18.7% are weak — a document-work agent, not a frontier tool agent.
- **Reasoning: 70/100.** GPQA 89.0% is near-frontier and AIME26 95.3% elite, with strong Korean benchmarks; AA-HLE 29.2%, CritPt 5.4% and a -0.8 Omniscience Index hold it mid-band (though the vendor's abstention-first design deliberately trades recall for groundedness).
- **Context window: 87/100.** 512K verified sits in the 500K–1M tier (85–94); AA-LCR 71% is solid at ~100K-token documents.
- **Multimodal: 15/100.** Text in/out only (per template: 15 if text-only).
- **Coding: 68/100.** LiveCodeBench 87.8% is strong and SWE-bench Verified 70.6% respectable; TB 2.1 57% and AA-SciCode 44.6% show it is not a coding-agent-first model.
- **Cost efficiency: 93/100.** $0.30/$1.20 per 1M with $0.06 cached input undercuts the ~$0.60/$2.20 (~92) anchor.
- **Overall Score: 60/100.** Half-up mean of the five quality dims (58+70+87+15+68)/5 = 59.6 → 60 — a compelling mid-price document-agent specialist (especially for Korean/Japanese office work) with genuine abstention behavior; general agentic/coding strength is mid-tier.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-25
- Method: public internet research (Upstage launch post, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
