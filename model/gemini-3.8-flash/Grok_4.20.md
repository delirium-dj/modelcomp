# Gemini 3.8 Flash — findings by Grok 4.20

- Source: Google (`gemini-3.8-flash`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google's September 2026 Flash-tier reasoning model, aimed at long-horizon coding agents and enterprise tool use, with a restricted cybersecurity sibling (3.8 Flash Cyber) that is not this entry.
- **Provider / access:** Google Gemini API / AI Studio, model ID `gemini-3.8-flash` (Chat Completions-style generateContent). Also listed on Artificial Analysis via Google's API. No OpenCode Zen Free ID verified in this pass.
- **Release / knowledge:** Released 2026-09-02 (Artificial Analysis, DataCamp, llm-stats). Knowledge cutoff March 2026 (llm-stats).
- **IDs:** `google/gemini-3.8-flash` (`gemini-3.8-flash`). No verified Zen Free ID in this pass.
- **Context window:** 1,000,000 tokens (Artificial Analysis, BenchLM, llm-stats). Max output about 65.5K–66K tokens (llm-stats) — just above the 64K caveat line.
- **Modalities:** Text, image, audio/speech, video, and PDF in; text out (Artificial Analysis, llm-stats). Reasoning yes. Tool calls yes (vendor agentic framing + Tau3 / Terminal-Bench). JSON mode not separately verified.
- **Pricing (as of 2026-09-29):** $0.75 / $3.75 per 1M input/output through 2026-12-31, then $1.50 / $7.50 (DataCamp, citing Google). Artificial Analysis: $0.75 in / $3.75 out, 90% cache discount, $1.24 per Intelligence Index task. Paid API scored; a standing free AI Studio quota was not independently confirmed here.
- **Architecture:** Proprietary; parameter count not disclosed (Artificial Analysis).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **90.8%** (Google via DataCamp, vs 81.6% for 3.7 Flash); BenchLM **89.4%**; Vals **81.3%**; Artificial Analysis Terminal-Bench 2.1 **87.6%**
- Terminal-Bench 4.0: **19.10%** BenchLM; AA **19.7%** (harder harness, not the 2.1 scale)
- Tau3-Banking: **38.1%** (Google via DataCamp, vs 30.9% for 3.7 Flash); AA Tau3-Banking **44.9%**
- GDPval-AA: **1545** Elo (BenchLM); normalized **45.6%** (BenchLM)
- OSWorld 2.0: **59.0%** (BenchLM)
- AA AutomationBench: **59.9%**; AA ITBench **52.5%**; Finance Agent v2 **61.4%** (BenchLM)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **95.3%** (AA-GPQA, BenchLM); Vals **94.4%**
- HLE: **45.4%** (Google via DataCamp, flat vs 45.7% for 3.7 Flash); AA-HLE **47.8%**; HLE-Verified **54.9%** (DataCamp / BenchLM)
- AA-LCR: **81.3%** (BenchLM). MRCR: no verified public score found
- CritPt: **18.3%** (BenchLM)
- Artificial Analysis Intelligence Index: **41** (#43/216 on the AA model page; BenchLM **40.9%**)
- Omniscience Accuracy / Hallucination Rate: **54.6% / 55.2%** (BenchLM); Omniscience Index **29.6**
- ARC-AGI-2: **89.2%** (BenchLM)

Coding:

- SWE-bench (Vals): **80.0%**. SWE-bench Verified: no verified public score found under that exact name
- SWE-Bench Pro: **61.6%** (Google via DataCamp, vs 60.4% for 3.7 Flash)
- SWE-Atlas: **51.9%** (Google via DataCamp, vs 48.0% for 3.7 Flash)
- LiveCodeBench (Vals): **89.5%**
- AA-SciCode: **56.6%** (BenchLM)
- DeepSWE: **73.8%** (BenchLM). DeepSWE v1.1 exact percent: not published in the DataCamp extract
- AA Coding Index: **76.3%** (BenchLM)

Long context:

- AA-LCR **81.3%** (BenchLM). No MRCR / RULER retrieval figure at 512K+ found, so the 1M window is not confirmed at ≥98% retrieval.

### Normalized scores (1–100)

- **Tool use: 87/100.** Terminal-Bench 2.1 is frontier (90.8% vendor, 87.6–89.4% independent) and OSWorld 2.0 is 59%, but Tau3-Banking 38.1–44.9% and GDPval-AA 1545 sit below the 50%+ / 1750 frontier band. No Claw-Eval. Capped by Tau3 and GDPval, not by terminal skill.
- **Reasoning: 83/100.** GPQA Diamond 94.4–95.3% and HLE 45.4–54.9% clear the frontier refs, but Intelligence Index 41 is well short of 60+ and CritPt is 18.3%. AA-LCR 81.3% is strong, not 95%+. Capped by the index and physics reasoning.
- **Context window: 96/100.** 1M tokens maps to the ≥1M band (95–100). Not 100: no ≥98% retrieval at 512K+; best long-context number is AA-LCR 81.3%. Max output ~66K is only a light caveat.
- **Multimodal: 92/100.** Text, image, audio, video, and PDF in with text out meets the audio-in 90–100 band. MMMU-Pro 85.6%, CharXiv 86.2%, LVBench 87.1% support vision. Capped because output is text-only.
- **Coding: 91/100.** TB2.1 90.8%, SciCode 56.6%, Coding Index 76.3%, LiveCodeBench 89.5%, and Vals SWE-bench 80% are frontier-class. DeepSWE 73.8% is a hair under the 74% ref, and SWE-Bench Pro 61.6% / SWE-Atlas 51.9% keep it out of the mid-90s.
- **Cost efficiency: 89/100.** $0.75/$3.75 is cheaper than the ~$1.25/$4.25 ≈ 88 anchor and dearer than ~$0.60/$2.20 ≈ 92, with a 90% cache discount. Scored on the paid intro rate; the scheduled 2027-01-01 doubling to $1.50/$7.50 is the cap.
- **Overall Score: 89.8/100.** Half-up mean of 87, 83, 96, 92, and 91. Best fit: default Flash-tier coding agent when terminal reliability matters more than open-ended exam reasoning.

---

## Signature

- Provided by: **Grok 4.20 (openrouter/~x-ai/grok-latest)** — 2026-09-29
- Method: public internet research (Artificial Analysis model page, BenchLM score tables, DataCamp launch write-up of Google's numbers, llm-stats card); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
