# Gemini 3.8 Flash — findings by Step 5 Preview

- Source: Google (DeepMind) `gemini-3.8-flash`
- Date: 2026-10-19 (UTC) — third-pass verification
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash (`gemini-3.8-flash`; API id `gemini-3.8-flash`)
- **Short description:** Google DeepMind's Flash-tier workhorse (4th Flash release in the Gemini 3 family), further-trained on Gemini 3.7 Flash. Positioned as the fast, cost-efficient model for long-horizon coding agents, terminal tasks, and document-heavy enterprise work — sitting below Gemini 3.1 Pro but tuned for high-volume, latency-tolerant workloads.
- **Provider / access:** Gemini API, Google AI Studio, Google Vertex AI; OpenAI-SDK-compatible. Chat Completions / generateContent. Free tier on Google AI Studio + unpaid API quota (data may be used to improve products); paid API/Vertex does not train on customer data.
- **Release / knowledge:** Released 2026-09-02. Knowledge cutoff not explicitly disclosed.
- **IDs:** `gemini-3.8-flash` (also `gemini-3.8-flash-low/medium/high` effort variants; `gemini-3.8-flash:batch`).
- **Context window:** 1,048,576 (1M) total input; 65,536 (64K) max output.
- **Modalities:** Text, image, video, audio, PDF in; text + tool-calls out. Reasoning yes (effort low→high); tool calls yes; structured outputs/JSON yes. No image/audio output.
- **Pricing (as of 2026-10-08):** $0.75/M in · $3.75/M out (all 3 tracked providers agree). Batch/Flex half rate; Priority costs more; AI Studio free tier $0.
- **Architecture:** Sparse Mixture-of-Experts transformer (further-trained on 3.7 Flash); parameter count undisclosed (proprietary).

### Raw benchmarks found

> Cross-referenced hokai.io (DataCamp independent + Google card + Artificial Analysis), benchmarkregistry.org (44 results/25 benchmarks), and vectorwire.ai (89 results/46 benchmarks, 28 independent, 13 vendor). Independent runs preferred.

- BenchLM composite (2026-10-19): **69.19/100** overall, #21 of 956 models, 56 of 644 benchmarks covered (partial coverage — conservative)
- Artificial Analysis today (2026-10-19): Intelligence Index **41** (#51/217, 4/4 intelligence units — matches the prior pass), 143.9 tok/s (#30/186), TTFT 25.81s, **170M Index tokens (very verbose — 2× the 85M median, a real cost multiplier)**, $1.24 per Index task, $0.75/$3.75 with 90% cache discount (blended $0.58/M), 1M context, 4 providers, released 2026-09-02 — NOT deprecated (current flagship Flash)

Agent / tool use:

- Terminal-Bench 2.1: **90.8%** (3rd-party comparison via hokai/DataCamp; ahead of GPT-5.6 Terra 87.4%, Claude Sonnet 5 80.4%) — frontier-leading on this bench
- Terminal-Bench 4.0 (hardest, current): **19.1%** (independent Vals AI mini-swe-agent, high) / **14.6%** (Muse Code) — the newest long-horizon bench exposes a large gap
- tau3-bench Banking: **38.1%** (DataCamp independent; up from 3.7's 30.9%)
- AutomationBench 1.0.6: **29.7%** (independent Zapier, medium/high)
- OSWorld 2.0: **59.0%** (vendor)
- Vals Index 2.1: **54.8%** (independent, high)
- APEX-Agents Original: **64.3%** (independent Mercor, high)
- BrowseComp (130-q, Mercor web agent): **83.1%** (independent)
- Chartography Oct 2026: **40.9%** (independent Surge AI, high)
- New independent agentic rows (2026-10-19): GDPval-AA **Elo 1,545** (Google card) / **46.8% normalized** (AA), AA Agentic Index **41.1%**, AA AutomationBench **59.9%** (AA's own harness — far above the Zapier 29.7% independent read; harness gap noted), AA ITBench **52.5%**, AA Tau3 Banking **44.9%** (vs the DataCamp 38.1% read), AA Terminal-Bench 2.1 **87.6%**, Finance Agent v2 **61.4%** (Google card — the table lead), AA-AnalystAgent **46.3%**, AA Briefcase **Elo 1,203**, Hermes Index **38.1%** / Hermes Bench **62.2%**, ApprenticeBench **24%**, AA Terminal-Bench 4.0 **19.7%** (corroborates the weak 19.1%), MazeBench **4%**, GDP.pdf **21.0%** (AA)

Reasoning / knowledge:

- HLE-Verified (full 1,811-item): **54.9%** (vendor/Google card) — clears the 40% frontier bar
- Artificial Analysis Intelligence Index v4.3.2: **41** (high-reasoning config; comparable-model median 26) — mid-tier, well below frontier 57–58
- LVBench (long video): **87.1–87.8%** (vendor)
- GPQA Diamond now surfaced (2026-10-19): AA-GPQA Diamond **95.3%** (Vals **94.4%**) — near-ceiling, filling the prior gap
- MMMU-Pro now surfaced (2026-10-19): AA-MMMU-Pro **85.6%**
- AIME 2025: no verified public score found for 3.8 Flash
- New independent rows (2026-10-19): ARC-AGI-1 **98.5%**, ARC-AGI-2 **89.2%** (ARC Prize semi-private) — frontier-class abstract reasoning; ARC-AGI-3 10.4%; AA-HLE **47.8%**; CritPt **18.3%**; FrontierMath v2 (Epoch AI) T1–3 **68.421%** / T4 **21.951%** — mediocre math, consistent with Vector Wire's Math "Limited"; AA-LCR **81.3%**; MLCR-AA **21.7%** (weak); Gray Swan IPI **5.5%**
- Vector Wire capability profile: **Reasoning "Strong"** (−5.5% vs leader, 6/6); **Factuality "Strong"** (−4.1%)

Coding:

- SWE-bench Pro: **61.6%** (DataCamp independent; up from 3.7's 60.4%) — mid-tier (frontier Opus 5.5 ~89.9%)
- DeepSWE v1.1: **73.7%** (vendor; Google claims ">70%") — just under the 74% frontier ref
- SWE-Atlas: **51.9%** (DataCamp independent; up from 48.0%)
- Vibe Code Bench 1.1 (OpenHands): **78.7%** (independent Vals AI, high)
- Terminal-Bench 4.0 (agentic coding): **19.1%** (independent)
- CursorBench 4.0 now surfaced (2026-10-19): **39.6%** (Cursor evals — weak); CursorBench 3.2 **69.2%**
- LiveCodeBench now surfaced (2026-10-19): LCB (Vals) **89.5%**; SWE-bench (Vals) **80.0%**; DeepSWE **73.8%** (DataCurve leaderboard — corroborates the vendor 73.7%); AA-SciCode **56.6%**; AA Coding Index **76.3%**; still weak: FrontierSWE v2 **19.6%**; Bug Hunt Bench **18.0 fixes**
- Vector Wire capability profile: **Coding "Limited"** (−29.0% vs leader, rank 5/10); **Math "Limited"** (−40.1%)

Multimodal:

- CharXiv (descriptive + reasoning): **95.4%** (independent Mercor single-shot, high) / **86.2%** reasoning no-tools (DataCamp, up from 84.5%)
- LVBench: **87.1–87.8%** (long-video understanding)
- Vector Wire: **Multimodal "Capable"** (−17.0% vs leader)

Long context:
- **Tool use: 80/100.** Terminal-Bench 2.1 90.8% is frontier-leading, but the current/hardest agentic evals are weak-to-mid — TB4.0 19.1% (independent), AutomationBench 29.7%, OSWorld 59%, Vals Index 54.8%, tau3-Banking 38.1% — and Vector Wire rates Agentic "Capable" (−20.3% vs leader). The older-bench headline does not carry over to the newest long-horizon terminal tasks, so this sits mid-band, not frontier.
- **Reasoning: 85/100.** HLE-Verified 54.9% clears the 40% frontier bar and Vector Wire rates Reasoning "Strong" (−5.5% vs leader, 6/6); LVBench 87% is solid. The third pass filled the GPQA gap — AA-GPQA Diamond 95.3% (Vals 94.4%) — and added ARC-AGI-2 89.2% (ARC Prize), so the former "no verified GPQA" cap is lifted; still held below the very top by the Artificial Analysis Intelligence Index of 41 (well under the 60+ frontier ref), the vendor-vs-independent HLE gap (Google 54.9% vs AA 47.8%), and no verified AIME row. Raised from 83.
- **Context window: 95/100.** 1M input with Vector Wire Long Context "Strong" (rank 1/3) and LVBench 87% — solidly in the ≥1M tier. Held from 100 by the 64K max-output cap (rubric caveat) and the absence of an explicit MRCR ≥98%-at-512K retrieval figure.
- **Multimodal: 88/100.** Full input coverage (text/image/video/audio/PDF) with CharXiv 95.4% (independent) and LVBench 87% puts it in the 90–100 input band; held to 88 by text-only output and Vector Wire's Multimodal "Capable" (−17% vs leader) rating.
- **Coding: 76/100.** SWE-bench Pro 61.6% and SWE-Atlas 51.9% are mid-tier (frontier Opus 5.5 is ~90%), DeepSWE 73.7% just misses the 74% frontier ref, and TB4.0 19.1% is weak; Vibe Code 78.7% is the bright spot. Vector Wire rates Coding "Limited" (−29% vs leader, rank 5/10) — coding is this model's clearest weakness for a high-Overall slot.
- **Cost efficiency: 90/100.** $0.75/$3.75 paid (between the ~$0.60/$2.20=92 and ~$1.25/$4.25=88 anchors) plus a genuinely free Google AI Studio / unpaid-quota tier; free tier carries a training-data caveat.
- **Overall Score: 85/100.** Mean of the five non-cost dims (80+85+95+88+76)/5 = 84.8 → 85 (Reasoning raised 83→85 on the third-pass AA-GPQA 95.3% / ARC-AGI-2 89.2% fills). Best fit as a cheap, fast, omni-input Flash workhorse for high-volume document/agent loops and latency-tolerant coding — but not a frontier coding or hardest-agentic pick.

---

## Signature

- Provided by: **Step 5 Preview (opencode/step-5-preview)** — 2026-10-19
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores. Third-pass verification (2026-10-19) re-ran Artificial Analysis and BenchLM: AA Index 41 unchanged (#51/217, 4/4 units), 143.9 tok/s, TTFT 25.81s, 170M Index tokens (very verbose — a cost multiplier), not deprecated (current flagship Flash); BenchLM composite 69.19/100 (#21/956, 56/644 benchmarks) filling the prior gaps — AA-GPQA 95.3%/Vals 94.4%, AA-MMMU-Pro 85.6%, ARC-AGI-2 89.2% (ARC Prize), LCB (Vals) 89.5%, SWE-bench (Vals) 80.0%, DeepSWE 73.8% (independent corroboration), CursorBench 4.0 39.6%, GDPval-AA Elo 1,545 / 46.8% normalized, AA AutomationBench 59.9% (vs the Zapier 29.7% harness — gap noted), AA-LCR 81.3% — Reasoning raised 83→85 on the GPQA/ARC fills (Overall 84→85). Second-pass verification (2026-10-10) cross-referenced benchmarkregistry.org (44 primary-source results, updated 2026-10-07), which confirmed CharXiv 95.4%, TB4.0 19.2%, Vibe Code 78.7%, APEX-Agents 64.3%, BrowseComp 83.1%, AutomationBench 29.7%, Vals Index 54.8% — no score change warranted. Prior pass (2026-10-08) used hokai.io, benchmarkregistry.org, and vectorwire.ai.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.


- 1M-token window confirmed; LVBench 87% (long video) and Vector Wire **Long Context "Strong"** (−9.2%, rank 1/3). No explicit MRCR ≥98%-at-512K retrieval figure published.

### Normalized scores (1–100)
