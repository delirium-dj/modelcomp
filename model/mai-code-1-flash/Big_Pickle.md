# Microsoft MAI-Code-1-Flash — findings by Big Pickle

- Source: Microsoft/MAI-Code-1-Flash (`github-copilot/mai-code-1-flash`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Code-1-Flash
- **Short description:** Microsoft AI's first in-house coding model (June 2026 Build) — a small fast MoE tuned directly on GitHub Copilot's production harness for high-volume iterative agentic coding; superseded by MAI-Code-1.1-Flash at a quarter the cost.
- **Provider / access:** GitHub Copilot model picker (VS Code, Copilot CLI) across Free/Pro/Pro+/Max plans (Enterprise/Business need a policy toggle); canonical ID `microsoft/mai-code-1-flash`. No standalone public API host tracked (no Zen/OpenRouter record as of 2026-10-07).
- **Release / knowledge:** 2026-06-02 (model card 2026-06-03, blog updated 2026-06-08). Knowledge cutoff not disclosed.
- **IDs:** `microsoft/mai-code-1-flash` (canonical, GitHub repo). No Free ID on Zen (flagged `noFreeId` in `meta.json`) — though it is $0 inside Copilot Free plan quotas.
- **Context window:** 256,000 total; 128,000 max output (meta.json / model card).
- **Modalities:** text in/out (model card: "text-to-text coding model"); tool calls; JSON mode; adaptive inference-time thinking. No vision — added only in 1.1.
- **Pricing (as of 2026-10-07):** $0.75 in / $4.50 out per 1M; cached input $0.075 (GitHub Copilot rate; abhs.in confirms still listed rate). Paid (Copilot plan credits).
- **Architecture:** MoE, 137B total / ~5B active per forward pass (HN/model-card reads; some coverage loosely says "137B-A5B"), trained from scratch on clean enterprise data with no third-party distillation.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2: **54.8%** (Microsoft model card, production VS Code harness)
- τ²-Bench (telecom): **71.7%** (model card; Haiku 4.5 at 54.7)
- IF Bench: **75.0** / Advanced IF: 71.4 / Robust IF: 61.2 average (model card) — +28.9 over Haiku on IF-Bench
- GDPval / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found (MCP Atlas 83.6% in dev.to table belongs to Gemini 3.5 Flash, not this model)

Reasoning / knowledge:

- GPQA Diamond: **84.6%** (model card)
- HLE: **18%** (model card)
- AIME 2026: **92.5%**; AMO Bench: 40%; FrontierMath Tier 1–3: **6.3%**; Frontier Science: 58.2% (model card)
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found (independent third-party runs had not published at launch; AA-index comparisons in HN thread cover Qwen3.6/Haiku, not this model)

Coding:

- SWE-bench Verified: **71.6%** (Microsoft, VS Code production harness; 10.8K avg tokens)
- SWE-bench Pro: **51.2%** (vs Haiku 4.5's 35.2% — +16 pts)
- SWE-bench Multilingual: **65.5%**; Terminal Bench 2: 54.8%
- Artifacts Bench (visual coding): 36.4% (≈ Haiku's 36.6)
- LiveCodeBench / SciCode / Vibe / DeepSWE: no verified public score found
- HN note: Qwen3.6-35B-A3B scores 49.5% SWE-Pro at similar active size — contextualizes 51.2 as mid-tier absolute despite beating Haiku

Long context:

- no long-context retrieval reported (256K window, no MRCR/RULER numbers)

### Normalized scores (1–100)

- **Tool use: 74/100.** τ²-Bench telecom 71.7% is well above the mid band (τ ~10–25 → 50–70) and IF-Bench 75 shows strong instruction-following for agents; capped by Terminal-Bench 2 54.8% in the mid band (45–60 → 50–70) and no GDPval/Claw-Eval/Toolathon evidence.
- **Reasoning: 72/100.** GPQA Diamond 84.6% and AIME 2026 92.5% are strong; capped well below frontier by HLE 18% (bar 40+), FrontierMath 6.3%, and no AA Index/BenchLM independent score to corroborate the vendor harness.
- **Context window: 73/100.** 256K lands in the 200K–500K tier (65–84) just above the 200K = 70 reference; capped from higher by zero long-context retrieval measurements.
- **Multimodal: 15/100.** Text-only in/out per the model card — 10–20 band; vision input only arrived with 1.1.
- **Coding: 78/100.** SWE-bench Verified 71.6% and SWE-Pro 51.2% in Copilot's production harness are genuinely strong for a flash-tier model (both above Gemini 2.5's SWE-V); capped by Terminal-Bench 2 54.8%, no LCB/SciCode/DeepSWE numbers, and all figures being Microsoft's own harness with no independent reproduction noted at launch.
- **Cost efficiency: 89/100.** $0.75/$4.50 sits just under the $1.25/$4.25 ≈ 88 reference with meaningfully cheaper input and up-to-60% token savings on hard tasks; still paid-only outside Copilot plan quotas.
- **Overall Score: 62.4/100.** (74+72+73+15+78)/5 = 62.4 — best-fit: efficient Copilot-native coder that beats Haiku 4.5 on every published coding benchmark, but text-only, vendor-harness-only numbers, and a mid reasoning profile keep it in the lower-mid pack; prefer 1.1-Flash unless the older rate card matters.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-10-07
- Method: fresh public web research (microsoft.ai model card PDF + launch blog, GitHub microsoft/MAI-Code, dev.to/HN/aggregator comparisons); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
