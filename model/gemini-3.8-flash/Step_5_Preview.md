# Gemini 3.8 Flash — findings by Step 5 Preview

- Source: Google (DeepMind) `gemini-3.8-flash`
- Date: 2026-10-10 (UTC) — second-pass verification
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

Reasoning / knowledge:

- HLE-Verified (full 1,811-item): **54.9%** (vendor/Google card) — clears the 40% frontier bar
- Artificial Analysis Intelligence Index v4.3.2: **41** (high-reasoning config; comparable-model median 26) — mid-tier, well below frontier 57–58
- LVBench (long video): **87.1–87.8%** (vendor)
- GPQA Diamond: covered by registry (Epoch/Mercor/Vals harnesses) but no single authoritative 3.8-Flash number surfaced live — treated as provisional
- MMMU-Pro: covered by registry (Mercor/Vals) but exact value not surfaced live
- AIME 2025: no verified public score found for 3.8 Flash
- Vector Wire capability profile: **Reasoning "Strong"** (−5.5% vs leader, 6/6); **Factuality "Strong"** (−4.1%)

Coding:

- SWE-bench Pro: **61.6%** (DataCamp independent; up from 3.7's 60.4%) — mid-tier (frontier Opus 5.5 ~89.9%)
- DeepSWE v1.1: **73.7%** (vendor; Google claims ">70%") — just under the 74% frontier ref
- SWE-Atlas: **51.9%** (DataCamp independent; up from 48.0%)
- Vibe Code Bench 1.1 (OpenHands): **78.7%** (independent Vals AI, high)
- Terminal-Bench 4.0 (agentic coding): **19.1%** (independent)
- CursorBench 4.0: covered by registry but exact value not surfaced live
- LiveCodeBench: no verified public 3.8-Flash row found live
- Vector Wire capability profile: **Coding "Limited"** (−29.0% vs leader, rank 5/10); **Math "Limited"** (−40.1%)

Multimodal:

- CharXiv (descriptive + reasoning): **95.4%** (independent Mercor single-shot, high) / **86.2%** reasoning no-tools (DataCamp, up from 84.5%)
- LVBench: **87.1–87.8%** (long-video understanding)
- Vector Wire: **Multimodal "Capable"** (−17.0% vs leader)

Long context:
- **Tool use: 80/100.** Terminal-Bench 2.1 90.8% is frontier-leading, but the current/hardest agentic evals are weak-to-mid — TB4.0 19.1% (independent), AutomationBench 29.7%, OSWorld 59%, Vals Index 54.8%, tau3-Banking 38.1% — and Vector Wire rates Agentic "Capable" (−20.3% vs leader). The older-bench headline does not carry over to the newest long-horizon terminal tasks, so this sits mid-band, not frontier.
- **Reasoning: 83/100.** HLE-Verified 54.9% clears the 40% frontier bar and Vector Wire rates Reasoning "Strong" (−5.5% vs leader, 6/6); LVBench 87% is solid. Capped by the Artificial Analysis Intelligence Index of 41 (well under the 60+ frontier ref) and no verified GPQA Diamond / AIME row surfaced live.
- **Context window: 95/100.** 1M input with Vector Wire Long Context "Strong" (rank 1/3) and LVBench 87% — solidly in the ≥1M tier. Held from 100 by the 64K max-output cap (rubric caveat) and the absence of an explicit MRCR ≥98%-at-512K retrieval figure.
- **Multimodal: 88/100.** Full input coverage (text/image/video/audio/PDF) with CharXiv 95.4% (independent) and LVBench 87% puts it in the 90–100 input band; held to 88 by text-only output and Vector Wire's Multimodal "Capable" (−17% vs leader) rating.
- **Coding: 76/100.** SWE-bench Pro 61.6% and SWE-Atlas 51.9% are mid-tier (frontier Opus 5.5 is ~90%), DeepSWE 73.7% just misses the 74% frontier ref, and TB4.0 19.1% is weak; Vibe Code 78.7% is the bright spot. Vector Wire rates Coding "Limited" (−29% vs leader, rank 5/10) — coding is this model's clearest weakness for a high-Overall slot.
- **Cost efficiency: 90/100.** $0.75/$3.75 paid (between the ~$0.60/$2.20=92 and ~$1.25/$4.25=88 anchors) plus a genuinely free Google AI Studio / unpaid-quota tier; free tier carries a training-data caveat.
- **Overall Score: 84/100.** Mean of the five non-cost dims (80+83+95+88+76)/5 = 84.4. Best fit as a cheap, fast, omni-input Flash workhorse for high-volume document/agent loops and latency-tolerant coding — but not a frontier coding or hardest-agentic pick.

---

## Signature

- Provided by: **Step 5 Preview (opencode/step-5-preview)** — 2026-10-10
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores. Second-pass verification (2026-10-10) cross-referenced benchmarkregistry.org (44 primary-source results, updated 2026-10-07), which confirmed CharXiv 95.4%, TB4.0 19.2%, Vibe Code 78.7%, APEX-Agents 64.3%, BrowseComp 83.1%, AutomationBench 29.7%, Vals Index 54.8% — no score change warranted. Prior pass (2026-10-08) used hokai.io, benchmarkregistry.org, and vectorwire.ai.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.


- 1M-token window confirmed; LVBench 87% (long video) and Vector Wire **Long Context "Strong"** (−9.2%, rank 1/3). No explicit MRCR ≥98%-at-512K retrieval figure published.

### Normalized scores (1–100)
