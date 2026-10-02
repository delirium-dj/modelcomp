# Qwen 3.6 Plus — findings by Kimi K3

- Source: Alibaba (`qwen3.6-plus`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.6 Plus
- **Short description:** Alibaba's production-focused successor to Qwen 3.5 Plus (Apr 2026): rebuilt reasoning layer that cuts overthinking (fewer reasoning tokens, more structured output), always-on chain-of-thought, first-class agentic tool use, and a 262K native context extendable to 1M. Distributed as a hosted preview/closed release rather than open weights like 3.5.
- **Provider / access:** Hosted inference — live on Qubrid AI from day 0 (`qwen3.6-plus`, OpenAI-compatible endpoint `https://platform.qubrid.com/v1`, defaults temperature 0.2 / top_p 0.9); Alibaba Cloud channels per vendor. Qubrid FAQ calls it fully production-ready (not a gated preview) while the sibling comparison lists license status as Preview/Closed.
- **Release / knowledge:** Live on Qubrid April 2026 (launch coverage 2026-04-02; head-to-head vs 3.5 Plus 2026-04-06).
- **IDs:** `qwen3.6-plus` (Qubrid). No Free ID exists on OpenCode Zen.
- **Context window:** 262K native, extends to 1M (Qubrid comparison); community testing reports meaningfully better retrieval accuracy across the full window than 3.5 Plus.
- **Modalities:** Text-first with document/image understanding reported on MMMU/RealWorldQA/OmniDocBench (Qubrid launch post); no native audio/video input (comparison post — unlike the 3.5 Omni sibling). Always-on reasoning; streaming + tools + structured outputs on Qubrid.
- **Pricing (as of 2026-10-01):** $0.50 / $3.00 per MTok (input/output), cached input $0.05 — Qubrid published pricing table. No Alibaba official list price verified in this pass.
- **Architecture:** Advanced hybrid architecture (successor to 3.5's Gated DeltaNet + MoE); parameter counts not published in available sources; closed/preview distribution.

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

- 1M extended window with better cross-window retrieval than 3.5 Plus (community testing, qualitative)
- MMMU / RealWorldQA / OmniDocBench: "high level of understanding" (launch post, qualitative; **no numbers published**)

### Normalized scores (1–100)

- **Tool use: 75/100.** Perfect 10/10 consistency with zero flaky failures and first-class agentic tool design; capped by qualitative-only Claw-Eval/TB numbers.
- **Reasoning: 68/100.** Demonstrably more efficient reasoning (515 fewer reasoning tokens, +92 output words vs 3.5 Plus in head-to-head) but no GPQA/HLE figures; scored above-mid, provisional.
- **Context window: 85/100.** 262K native (200K–500K tier) extending to 1M with improved retrieval per community testing; missing quantified @512K+ needle results keep it off the 95+ tier.
- **Multimodal: 70/100.** Image/document understanding reported (MMMU/RealWorldQA/OmniDocBench qualitative) but text-first without audio/video; conflicting emphasis between Qubrid posts noted.
- **Coding: 80/100.** "Approaching 85+" SWE-bench Verified community claim + vendor-highlighted agentic-coding strength and stable multi-step pipelines; capped by the lack of an exact published SWE-bench number.
- **Cost efficiency: 90/100.** $0.50/$3.00 per MTok with $0.05 cached input sits just under the ~$0.60/$2.20 → ~92 reference; fewer wasted reasoning tokens compound the effective savings.
- **Overall Score: 76/100.** Half-up mean of the five quality dims: (75 + 68 + 85 + 70 + 80) / 5 = 75.6 → 76. Best fit: production agentic workflows (tool orchestration, coding copilots, document apps) needing consistency and cost-efficiency over open weights.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-01
- Method: public internet research (Qubrid AI launch post 2026-04-02 and Qwen 3.5 Plus vs 3.6 Plus head-to-head 2026-04-06, incl. published pricing table and playground measurements); scores are normalized 1–100 interpretations — multiple raw rows rely on a single third-party source and are marked provisional.
- Future sources: add a new file next to this one, e.g. `Claude_Sonnet_4.md`, using the same headings.
