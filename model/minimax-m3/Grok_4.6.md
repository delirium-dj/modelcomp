# MiniMax M3 — findings by Grok 4.6

- Source: MiniMax / MiniMax-M3
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3
- **Short description:** MiniMax’s June 2026 M-series model: MSA sparse attention, up to 1M context, native image/video input, and open-weights planned/released under the MiniMax Community License. Successor to text-only M2.7; aimed at coding agents and long-horizon computer use.
- **Provider / access:** MiniMax first-party API (Chat Completions-style); also SiliconFlow, GMI, Novita. Typical IDs `MiniMax-M3` / `minimax/minimax-m3`. Thinking can be on, adaptive, or off.
- **Release / knowledge:** Released 2026-06-01. Knowledge cutoff **no verified public date found**.
- **IDs:** `minimax/minimax-m3` (hosted). No OpenCode Zen Free ID found.
- **Context window:** Up to **1M** tokens on the API; MiniMax states a **guaranteed minimum of 512K**. Max generation cited ~524,288 tokens (recommend 131,072). 1M uses MiniMax Sparse Attention (MSA).
- **Modalities:** Text, image, and video in; text out. Tool calls; desktop computer use (OSWorld). Thinking toggle.
- **Pricing (as of 2026-09-19):** Standard (permanent 50% off list): **$0.30 / $1.20** per 1M in/out for ≤512K input, cache read $0.06; **$0.60 / $2.40** / cache $0.12 for >512K. Priority is 1.5×. Paid.
- **Architecture:** Open weights (MiniMax Community License; AA noted commercially restricted license on M2.7). MoE/param counts **no verified public total/active count found** on the product page excerpt.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (**MiniMax**, Terminus 2, internal infra): **66.0%**
- Tau3-Banking: **no verified public score found**
- GDPval-AA: **~1,670 Elo** (Artificial Analysis, 2026-06-08)
- MCP Atlas: **74.2%** (evals.report, 2026-06-01)
- OSWorld-Verified (**MiniMax**, 361 tasks, max steps 200): **70.06%** (68.70% at 100 steps)
- BrowseComp (**MiniMax**): **83.5**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **93%** (AA: +6 vs M2.7 87%); LLMLearner **92.9%**; BenchmarkList **92.7%**
- HLE: **37%** (AA text); LLMLearner **39.0%** text-only
- CritPt: **4%** (AA; LLMLearner 3.7)
- Artificial Analysis Intelligence Index: **55** at launch (2026-06-08); later aggregator **45.4** (BenchmarkList, 2026-09-02)
- AA-LCR: **74%** (AA)
- AA-Omniscience: accuracy **15.0%**, hallucination **16.1%**, attempt rate **30.9%** (AA)
- MMMU-Pro: **~80%** (AA); BenchmarkList **81.2%**

Coding:

- SWE-bench Pro (**MiniMax**): **59.0%**
- SWE-bench Verified: **80.5** (BenchmarkList aggregator; MiniMax describes a Claude Code harness, 4-run mean — **vendor numeric not extracted** from the blog body)
- LiveCodeBench: **82.2%** (BenchmarkList aggregator)
- SciCode: **45%** (AA; small regression vs M2.7 47%)
- Vibe Code Bench: **47.57%** (evals.report)
- DeepSWE: **13.3%** (evals.report, unverified)
- SWE Atlas Codebase QnA: **37.9** (BenchmarkList)
- FrontierCode Main: **14.7%** (evals.report)

Long context:

- Official up to **1M** (512K guaranteed). AA-LCR **74%**. **no MRCR / RULER / GraphWalks** figure found.

### Normalized scores (1–100)

- **Tool use: 82/100.** GDPval-AA ~1670 is below the ~1750 frontier ref but well above mid; TB 2.1 66% is above mid (45–60) and short of ~88%; OSWorld ~70% and MCP Atlas 74.2% support a high-80s agent story. Caps: no Tau3/Claw; DeepSWE 13.3% is a weak agentic-coding signal.
- **Reasoning: 82/100.** GPQA Diamond ~93% is frontier; HLE 37–39% sits on the 40% frontier line; launch Index 55 is just under 60+. Caps: CritPt 4%; Omniscience accuracy 15% via heavy abstention; later Index ~45.
- **Context window: 96/100.** 1M advertised maps to 95–100; 512K is the billed/guaranteed floor (85–94 if scored only on 512K). Caps: no ≥98% retrieval at 512K+.
- **Multimodal: 82/100.** Native image **and video** in puts it in the 75–90 band (MMMU-Pro ~80%). Caps: text-only output; no public audio I/O.
- **Coding: 78/100.** SWE-Pro 59% and TB 2.1 66% are mid-high; SciCode 45% and Vibe ~48% sit in the methodology’s mid band. Caps: DeepSWE 13.3%; FrontierCode 14.7%; SWE-Verified 80.5% is aggregator-only here.
- **Cost efficiency: 94/100.** $0.30/$1.20 is between ~$0.10/$0.20 (97–99) and ~$0.60/$2.20 (~92). Long-context band doubles the rate.
- **Overall Score: 84.0/100.** Mean of 82, 82, 96, 82, 78. Best fit: cheap 1M-context multimodal coding agent when Claude/GPT list prices are too high.

---

## Signature

- Provided by: **Grok 4.6 (xAI/grok-4.6)** — 2026-09-19
- Method: Public internet research (MiniMax blog/docs, Artificial Analysis, evals.report); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
