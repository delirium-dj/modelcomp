# Mistral Large 4 — findings by Muse Glimmer 30B

- Source: Mistral AI (`mistral-large-4`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Large 4
- **Short description:** Mistral AI's open-weight frontier MoE flagship "le Chonk" — a natively multimodal 1T-parameter model with 52B active for reasoning, coding and agentic work, positioned as a European sovereignty alternative with strong cyber and document grounding capabilities.
- **Provider / access:** Mistral Studio public preview API, OpenCode Zen `opencode/mistral-large-4`, OpenRouter `mistralai/mistral-large-4-0`. Preview served on Mistral's own European infrastructure.
- **Release / knowledge:** Public preview 2026-10-06; weights promised end of October 2026. Knowledge cutoff not published. RL run still in flight per vendor.
- **IDs:** `mistral-large-4` (Mistral), `mistralai/mistral-large-4-0` (OpenRouter). No free tier.
- **Context window:** 524k tokens measured by Artificial Analysis; vendor docs list 1M total with ~1.6B vision encoder. Meta curation lists 131,072 total (32,768 out).
- **Modalities:** Text + image in → text out; hybrid instruct/reasoning; function calling / agents supported; no audio/video generation.
- **Pricing (as of 2026-10-20):** Mistral list $1.36/M input, $4.18/M output, $0.14/M cached; OpenCode Zen runs ~50% discount. Meta curated note $2.00/$6.00.
- **Architecture:** 1 trillion total parameters, 52B active, granular Mixture-of-Experts, natively multimodal, open-weight pending release.

### Raw benchmarks found

Agent / tool use:

- AA AutomationBench-AA: 59.9% (Mistral) / 59.9% (Artificial Analysis) — 657 business workflows.
- AA-Briefcase v1.1: 1,393 Elo (Mistral) / 1393 (Artificial Analysis) — long-horizon knowledge work.
- GDPval-AA v2.1: 1,422 Elo / 46.1% normalized (Artificial Analysis).
- Terminal-Bench 4.0: 28.3% (Mistral) / 26.8% (Artificial Analysis).
- Cybench: 93.0% (Mistral, 40 security competition exercises).
- CyberGym-E2E: 82% (Mistral) — reproduce and patch real open-source vulnerability, highest of any model, closed models score near zero due to refusals.
- Artificial Analysis Cyber Index: top five globally, leading open-weight non-China.
- Finance Agent v2: 54.7% (Vals AI).
- Harvey's Legal Agent Benchmark: outperforms all open-source models per Mistral via vals.ai; no number published.
- Coding Agent Index: 49.8% (Mistral) — ahead of DeepSeek V4 Pro 0813 and Qwen3.8 Max.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: 38 (Artificial Analysis).
- AA-LCR v1.1: 81.3% (Artificial Analysis).
- AA-HLE: 35.0% (Artificial Analysis).
- CritPt: 10.6% (Artificial Analysis).
- AA-Omniscience Index: -5.3; Accuracy 25.8%; Hallucination Rate 41.9% (Artificial Analysis).
- GPQA Diamond, MMLU-Pro, AIME: no verified public score found.
- KORA Benchmark: 1.691 / 2.0 (Mistral); Lakera B3 AI Security Benchmark: resists 93.3% of indirect prompt injections.

Coding:

- DeepSWE v1.1: 61.7% (Mistral).
- SWE-Atlas-QnA: 59.4% (Mistral).
- Vibe Code Bench: 78.40% (Vals AI) — highest observed in this research pass on the harness.
- AA-SciCode: 54.2% (Artificial Analysis); SciCode-Verified: state of the art among open-weight models per Mistral, no number.
- Blind human evaluation with Surge AI: 3.74/5, 2nd of 5, ahead of GLM-5.3 3.60, Kimi K3 3.59.
- SWE-bench Verified / Pro, LiveCodeBench: no verified public score found.

Multimodal:

- Dense 200 visual grounding: 42% (Mistral) vs GPT-6 Astra 41%.
- AA-MMMU-Pro: 76.4% (Artificial Analysis).
- GDP.pdf: 18.6% (Artificial Analysis).
- ChartQA Pro: no verified public score found.

Long context:

- No MRCR/RULER/GraphWalks curve found. AA-LCR 81.3% confirms usable quality at scale.

### Normalized scores (1–100)

- **Tool use: 84/100.** AutomationBench 59.9% and AA-Briefcase 1,393 Elo are exactly corroborated, CyberBench 93% and CyberGym-E2E 82% are exceptional, Terminal-Bench 4 ~27% is strong for this harness. Capped by GDP.pdf 18.6% and unquantified legal agent claim.
- **Reasoning: 75/100.** AA-LCR 81.3% and Intelligence Index 38 are solid; KORA 1.691 shows responsible engagement. Capped by CritPt 10.6%, AA-Omniscience hallucination 41.9% and absence of GPQA/MMLU-Pro/AIME numbers.
- **Context window: 86/100.** 524k measured with 1M advertised, AA-LCR 81.3% usable quality, RL pipeline built for million-token rollouts. Held under 90 by lack of retrieval curve and max-output figure.
- **Multimodal: 81/100.** Text+image in verified, AA-MMMU-Pro 76.4% independent, Dense 200 42% beating GPT-6 Astra 41% on grounding. Text-only output and GDP.pdf 18.6% limit score.
- **Coding: 81/100.** Vibe Code Bench 78.40% is the standout result on the harness, DeepSWE 61.7% and SWE-Atlas-QnA 59.4% are strong, AA-SciCode 54.2% corroborates. No SWE-bench Verified/LiveCodeBench figures.
- **Cost efficiency: 86/100.** $1.36/$4.18 list, ~50% discount on Zen, high Intelligence Index 38 and multimodal performance make it good value for open-weight sovereign deployment. No free tier and large weight size dock points.
- **Overall Score: 81.4/100.** Mean of the five quality dims (84 + 75 + 86 + 81 + 81) / 5 = 81.4. Best fit for sovereign enterprise automation, cyber vulnerability reproduction/patching where closed models refuse, legal/financial agents, and engineering drawing/satellite imagery grounding.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-20
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
