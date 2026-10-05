# Claude 3.5 Haiku — findings by Kimi K3

- Source: Anthropic (`claude-3-5-haiku-20241022`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude 3.5 Haiku
- **Short description:** Anthropic's fast, cheap entry of the Claude 3.5 tier (late 2024) — matched the previous flagship Claude 3 Opus on coding at roughly a tenth of the cost. A legacy model: succeeded by Haiku 4.5 and retired from first-party API access on 2026-02-19.
- **Provider / access:** Anthropic first-party API (`claude-3-5-haiku-20241022`, Messages API; tool use supported) — retired 2026-02-19 per AI/TLDR; historical access also via AWS Bedrock / GCP Vertex AI. No Zen Free ID.
- **Release / knowledge:** Announced 2024-10-22, API GA November 2024; knowledge cutoff 2024-07 (CorX Labs spec sheet). Status: retired (2026-02-19).
- **IDs:** `claude-3-5-haiku-20241022` (Anthropic). No `opencode/` free ID.
- **Context window:** 200,000 tokens input; max output 8,192 tokens (CorX Labs) — small output cap noted as caveat.
- **Modalities:** Text + image input; text output. No reasoning/thinking mode (predates extended thinking — plain fast response model). Tool calling: yes; JSON via tool use.
- **Pricing (as of retirement-era lists; effective 2026-05-27 Anthropic list):** $0.80/M input, $4.00/M output (blended 3:1 = $1.60); batch discounts excluded.
- **Architecture:** Proprietary, parameters not reported, weights never released.

### Raw benchmarks found

Figures published by Anthropic or public leaderboards (via CorX Labs, rows last checked 2026-08; Anthropic self-reported harness):

Agent / tool use:

- Terminal-Bench 2.1 / Tau3-Banking / GDPval-AA / Claw-Eval / Toolathlon / SWE Atlas: **no verified public score found** (tool use supported in API; no agentic benchmark published)

Reasoning / knowledge:

- GPQA Diamond: **41.6%** (rank 80/83 among reporters — CorX Labs)
- MMLU-Pro: **65.0%** (rank 36/77 — CorX Labs)
- HLE / LCR / MLCR / CritPt: **no verified public score found** (HLE did not exist at release)
- Artificial Analysis Intelligence Index: page exists (artificialanalysis.ai/models/claude-3-5-haiku) but no index value captured in sources read — **no verified public score found**
- LMArena / Chatbot Arena Elo: **~1180** (serenitiesai benchmark listing)

Coding:

- SWE-bench Verified: **40.6%** (Anthropic-reported; CorX Labs rank 32/33 among reporters)
- HumanEval: **88.1%** (rank 15/46 — CorX Labs)
- LiveCodeBench / SciCode / SWE-bench Pro / Vibe Code Bench / DeepSWE: **no verified public score found**
- ChatForest review note: positioned for "high-throughput agentic pipelines, sub-agent roles" — beat Claude 3 Opus on code at ~1/10 the cost.

Long context:

- No MRCR / RULER / GraphWalks retrieval numbers published — no long-context retrieval reported (200K window unused by such evals at release).

### Normalized scores (1–100)

- **Tool use: 50/100.** Native tool-use API support and real-world sub-agent usage, but zero published agentic benchmarks (pre-TB2.1/Tau3 era). Unmeasured mid.
- **Reasoning: 45/100.** GPQA Diamond 41.6% and MMLU-Pro 65.0% rank near the bottom of 2026-era leaderboards; no thinking mode. Solid for 2024, weak by current standards.
- **Context window: 70/100.** 200K window (200K = 70 per tier mapping); 8,192 max output is an extra practical caveat for long generations.
- **Multimodal: 60/100.** Text + image input with text output — bottom of the +image-in band; no MMMU/video/audio evidence.
- **Coding: 60/100.** SWE-bench Verified 40.6% + HumanEval 88.1% = mid-band coding (strong for its era/predecessors, well behind 2026 coders).
- **Cost efficiency: 89/100.** $0.80/$4.00 sits between the ~$0.60/$2.20 (~92) and ~$1.25/$4.25 (~88) reference points — cheap-ish but no longer remarkable, and the model is retired from first-party access.
- **Overall Score: 57/100.** Mean of five quality dims (50+45+70+60+60)/5 = 57.0 → 57. Best fit: historical baseline / legacy deployments only — superseded by Haiku 4.5 and every 2026 flash-tier model.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-05
- Method: public internet research (CorX Labs benchmark table, AI/TLDR spec page, Anthropic list-price PDF effective 2026-05-27, chatforest review, serenitiesai listing); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
