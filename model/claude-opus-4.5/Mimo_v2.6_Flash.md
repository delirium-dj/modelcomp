# Claude Opus 4.5 — findings by Mimo v2.6 Flash

- Source: Anthropic / Claude Opus 4.5
- Date: 2026-09-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.5
- **Short description:** Anthropic's Nov 2025 Opus flagship — the model that cut Opus-tier pricing 67% ($15/$75 → $5/$25) and posted SOTA real-world software-engineering results at launch. Succeeded by Opus 4.6/4.7/4.8/5/5.5 (Anthropic product page), but Anthropic still marks it active (Verdent FAQ). Not an alias — distinct from every later Opus snapshot.
- **Provider / access:** Claude API (`claude-opus-4-5-20251101`, snapshot `claude-opus-4-5`), Amazon Bedrock (`anthropic.claude-opus-4-5...`), Google Vertex AI, Microsoft Foundry, Claude apps — Chat Completions-style Messages API.
- **Release / knowledge:** 2025-11-24 (Anthropic announcement); knowledge cutoff not verified in sources reviewed.
- **IDs:** `anthropic/claude-opus-4.5` (registry id); Claude API `claude-opus-4-5-20251101`. No Free API tier exists for Anthropic models — no Free ID (`noFreeId`).
- **Context window:** 200,000 tokens (Anthropic eval methodology: "200K context window"; BenchLeader/OpenRouter provider tables) — max output not verified in sources reviewed.
- **Modalities:** text, image in; text out ("text · vision" — ModelBeats); reasoning yes (thinking + effort levels: low/medium/high, Anthropic "thinking" config benchmarked); tool calls yes (function calling, computer use, multi-agent); JSON mode: no verified public statement found for this snapshot.
- **Pricing (as of 2026-09-26):** $5.00 / 1M input, $25.00 / 1M output (Anthropic; OpenRouter/BenchLeader provider tables — Anthropic route $5/$25, Bedrock up to $5.50/$27.50); prompt caching available (Verdent notes cache-read/write rates). Paid only.
- **Architecture:** proprietary (Anthropic); parameters undisclosed; Transformer architecture (ModelBeats).

### Raw benchmarks found

Agent / tool use:

- τ²-Bench Telecom: **98.2%** (ModelBeats, rank #5) / **86.3%** (Artificial Analysis non-reasoning config via OpenRouter) — harness difference noted.
- Terminal-Bench 2.0: **59.8%** (ModelBeats, #53); Terminal-Bench Hard: **40.9%** (AA via OpenRouter). Terminal-Bench 2.1: no verified public score found.
- GDPval-AA: **1416 Elo** (ModelBeats, #33; field best Claude Fable 5 1932).
- OSWorld-Verified: **66.3%** (ModelBeats, #21); BrowseComp: **67.8%** (#36); IFBench: 43.0% (AA via OpenRouter).
- Claw-Eval / ClawProBench, Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: **87.0%** (ModelBeats, #58) / **86.0%** (Epoch AI via BenchLeader, #71) / 81.0% (AA non-reasoning via OpenRouter).
- HLE: **43.2%** (ModelBeats, #23) / **25.2%** (Scale AI/CAIS via BenchLeader, #15) / 13.2% (AA non-reasoning) — harness spread noted.
- AA-LCR: **77.3%** thinking / 70.7% non-reasoning (Artificial Analysis via BenchLeader/OpenRouter).
- CritPt (AA): 0.3% non-reasoning (OpenRouter); thinking config: no verified public score found.
- Artificial Analysis Intelligence Index: **29.1** (#102 thinking) / 23.7 (#155 non-reasoning) (BenchLeader). BenchLM overall: no verified public score found.
- AA-Omniscience: accuracy **40.9%**, non-hallucination 23.8% (AA via OpenRouter).
- SimpleBench: 62.0% (#22); MMLU: 90.8% (#4); AIME: 93.0% (#33); ARC-AGI-1: 80.0% (#9); ARC-AGI-2: 37.6% (#21); MGSM: 95.2% (#1) — ModelBeats/BenchLeader.

Coding:

- SWE-bench Verified: **80.9%** (ModelBeats, #14; Anthropic launch claim, Verdent confirms).
- SWE-bench Pro: **52.0%** (ModelBeats, #57).
- LiveCodeBench: **83.7%** (ModelBeats, #34); Aider Polyglot: **89.4%** (#1); HumanEval: 99.4% (#1); CyberGym: 50.6% (#11).
- SciCode / Vibe Code Bench / DeepSWE / Coding Index: no verified public score found.

Long context:

- 200K window (Anthropic eval methodology); AA-LCR 77.3% (thinking) shows strong long-context reasoning; MRCR / RULER: no verified public score found.

Other: Arena Elo 2184.1 (#68; High config 2220.5) per ModelBeats; MMMU-Pro 70.6% (#42) / 74.0% (AA thinking) / 83.0% (Vals); MMMU 80.7% (#22); output speed 48 tok/s (AA via BenchLeader).

### Normalized scores (1–100)

- **Tool use: 85/100.** τ²-Telecom 98.2% (#5), OSWorld-Verified 66.3%, GDPval 1416 and BrowseComp 67.8% form a top-tier agent profile; TB2.0 59.8% and TB Hard 40.9% (below frontier TB2.1 levels) are what cap it below 90.
- **Reasoning: 80/100.** GPQA 86–87% and HLE up to 43.2% are frontier-adjacent, but the AA Intelligence Index (29.1, #102) and CritPt ≈0 put it well below the 90–100 frontier band; harness spreads add caution.
- **Context window: 72/100.** 200K is the explicit 70-point anchor of the 200K–500K tier; AA-LCR 77.3% (thinking) justifies a small bump above it.
- **Multimodal: 70/100.** Image input with text output sits at the top of the 60–70 band, supported by MMMU 80.7% / MMMU-Pro up to 83.0% (Vals) and GeoBench 75.0% (#9); no audio/video/PDF-in evidence verified, so it cannot enter the 75+ band.
- **Coding: 88/100.** SWE-bench Verified 80.9% (#14), LiveCodeBench 83.7%, Aider Polyglot 89.4% (#1) and HumanEval 99.4% are frontier-grade; missing SciCode/DeepSWE/Vibe rows and TB2.0 59.8% keep it just below 90.
- **Cost efficiency: 50/100.** $5/$25 sits between the $3/$15 (≈60) and $10/$50 (≈30) methodology anchors; the 67% Opus-tier price cut is historically notable but the model is still an expensive flagship with no free tier.
- **Overall Score: 79/100.** Half-up mean of Tool 85, Reasoning 80, Context 72, Multimodal 70, Coding 88 = 79.0. Best fit: high-judgment agentic coding and computer-use planning where the Opus tier earns its price; route routine implementation to cheaper workers.

---

## Signature

- Provided by: **Mimo v2.6 Flash (Xiaomi/MiMo-V2.6-Flash)** — 2026-09-26
- Method: fresh public web research (Anthropic announcement, ModelBeats, BenchLeader, OpenRouter, Verdent); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

