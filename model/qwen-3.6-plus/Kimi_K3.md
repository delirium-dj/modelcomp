# Qwen 3.6 Plus — findings by Kimi K3

- Source: Alibaba (`qwen3.6-plus`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.6 Plus
- **Short description:** Alibaba's production-focused successor to Qwen 3.5 Plus (Apr 2026): rebuilt reasoning layer that cuts overthinking (fewer reasoning tokens, more structured output), always-on chain-of-thought, first-class agentic tool use, and a 262K native context extendable to 1M. Distributed as a hosted preview/closed release rather than open weights like 3.5.
- **Provider / access:** Hosted inference — live on Qubrid AI (`qwen3.6-plus`, OpenAI-compatible) and Alibaba Cloud channels; OpenCode Zen route `opencode/qwen3.6-plus` live (OpenCode Data, ~#43 weekly, 54.6% retention).
- **Release / knowledge:** Live 2026-04-02 (OpenCode Data catalog date matches the Qubrid launch coverage; first pass said "April 2026"); catalog lists knowledge cutoff 2025-04 (plausible).
- **IDs:** `qwen3.6-plus` (Qubrid), `alibaba/qwen3.6-plus` (OpenCode Data). No Free ID exists on Zen.
- **Context window:** 262K native, extends to 1M (catalog lists 1M / **66K max output** — new this pass); community testing reports better retrieval across the full window than 3.5 Plus.
- **Modalities:** text/image/**video** in per the OpenCode Data catalog — CONFLICT with the Qubrid comparison post's "no native audio/video" claim (catalog governs; noted); text out. Always-on reasoning; streaming + tools + structured outputs.
- **Pricing (as of 2026-10-11):** $0.50/M input, $3.00/M output, cached input $0.05, cache write $0.63 (OpenCode Data catalog — verified now; matches the Qubrid published table).
- **Architecture:** Advanced hybrid architecture (successor to 3.5's Gated DeltaNet + MoE); parameter counts not published; closed/preview distribution.

### Raw benchmarks found

Agent / tool use:

- Consistency benchmark: **10.0/10** with **zero flaky test failures** (vs 3.5 Plus 9.0 with 2 failures) — Qubrid comparison, Apr 2026
- Claw-Eval / QwenClawBench: improved end-to-end reliability (Qubrid launch post — qualitative; **no numeric score published**)
- Terminal-Bench: strong performance cited (qualitative); **no verified numeric score found**
- Tau3 / GDPval-AA / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- Qubrid playground head-to-head (same image-describe prompt): **1,343 reasoning tokens → 270 output words** vs 3.5 Plus 1,858/178; TTFT 6.93s; 38.32 tok/s (slower raw generation, denser output)
- GPQA / HLE / CritPt: **no verified public score found**

Coding:

- SWE-bench Verified: **"approaching 85+"** — community claim cited in the Qubrid comparison (provisional, no exact published figure)
- Vendor-positioned strength areas: agentic coding and front-end component generation (Alibaba highlights, per Qubrid)

Long context / multimodal (raw):

- 1M extended window with better cross-window retrieval than 3.5 Plus (community testing, qualitative); catalog max output 66K
- MMMU / RealWorldQA / OmniDocBench: "high level of understanding" (launch post, qualitative; **no numbers published**); video input catalog-listed this pass

### Normalized scores (1–100)

- **Tool use: 75/100.** Unchanged: perfect 10/10 consistency with zero flaky failures; capped by qualitative-only Claw-Eval/TB numbers.
- **Reasoning: 68/100.** Unchanged: demonstrably more efficient reasoning vs 3.5 Plus; no GPQA/HLE figures; scored above-mid, provisional.
- **Context window: 85/100.** Unchanged: 262K native extending to 1M (catalog-awaited 66K output now verified); missing quantified @512K+ needle results keep it off the 95+ tier.
- **Multimodal: 74/100.** Raised from 70: the OpenCode catalog lists video input (against the Qubrid comparison's claim) — image+video+document band; text-only output and qualitative-only MMU numbers still cap it.
- **Coding: 80/100.** Unchanged: "approaching 85+" SWE-bench Verified community claim + vendor-highlighted agentic-coding strength; capped by no exact published number.
- **Cost efficiency: 90/100.** Verified: $0.50/$3.00 with $0.05 cached input; fewer wasted reasoning tokens compound effective savings.
- **Overall Score: 76/100.** Half-up mean of the five quality dims: (75 + 68 + 85 + 74 + 80) / 5 = 76.4 → 76. Best fit: production agentic workflows (tool orchestration, coding copilots, document apps) needing consistency and cost-efficiency over open weights.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-11
- Method: public internet research (Qubrid AI launch post 2026-04-02 and Qwen 3.5 Plus vs 3.6 Plus head-to-head 2026-04-06; **second pass** verified release date, pricing, 66K output and the video-input conflict against OpenCode Data `alibaba/qwen3-6-plus`); scores are normalized 1–100 interpretations — multiple raw rows rely on a single third-party source and are marked provisional.
- Future sources: add a new file next to this one using the same headings.
