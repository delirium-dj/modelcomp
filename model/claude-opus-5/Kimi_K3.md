# Claude Opus 5 — findings by Kimi K3

- Source: Anthropic / Claude Opus 5 (`claude-opus-5`)
- Date: 2026-10-13 (UTC) — deep second pass (first pass 2026-09-24; release date verified, Artificial Analysis now marks the model deprecated in favor of Opus 5.5; pricing/index figures re-verified and consistent)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic's Opus-class flagship of the Claude 5 generation — elite agentic tool use, coding, and long-horizon knowledge work. **Deprecated at Artificial Analysis as of 2026-10** (successor: Claude Opus 5.5); succeeded at the very top by Fable/Mythos 5.1 (Sept 2026).
- **Provider / access:** Claude API `claude-opus-5` via **8 API providers** (Artificial Analysis count, this pass) incl. Amazon Bedrock, Google Cloud; also served on OpenCode Zen as `claude-opus-5` (paid ID in the 2026-10-13 Zen listing — first pass only noted no Free ID).
- **Release / knowledge:** **Released 2026-07-24** (Artificial Analysis — new this pass; matches the first-pass "retirement no sooner than 2027-07-24" note at exactly release+1yr, both verified); knowledge cutoff May 2026 (first-pass felloai table).
- **IDs:** `anthropic/claude-opus-5`.
- **Context window:** 1M tokens input / 128K max output (first-pass; 1M re-confirmed by AA this pass).
- **Modalities:** text + image in → text out (AA specs this pass — first pass's broader "document grounding" claim narrowed to image+text); adaptive thinking with effort levels; tool calls; JSON mode.
- **Pricing (as of 2026-10-13):** **$5/M input, $25/M output, 90% cache discount; blended (7:2:1) ≈ $3.85/M** (Artificial Analysis — re-verified; first-pass felloai cache/batch rows still plausible).
- **Architecture:** proprietary (Anthropic); params undisclosed.
- **Performance:** 56.3 output tok/s (#149/185), TTFT 85.1 s (thinking-included), 140M output tokens per Intelligence Index run — notably verbose (AA, this pass).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (Vals): 84.6%; TB 3.0: 42.7%; TB 4.0: 52.3% (felloai/Anthropic launch table, first-pass)
- Tau3-Banking (AA): 42.1%; GDPval-AA: 1862 Elo; MCP Atlas: 85.8%; Toolathlon-Verified: 80.6%; BrowseComp: 90.8%; DeepSearchQA: 95.0%; OSWorld 2.0: 70.6%; DRACO: 88.6%; AA Briefcase: 1720 Elo; AA Agentic Index: 56.2%; AA AutomationBench: 56.6%; AA EnterpriseOps-Gym: 47.5% (benchlm.ai, first-pass snapshot)
- Claw-Eval / ClawProBench: no verified public score found (unchanged)

Reasoning / knowledge:

- GPQA Diamond: 93.2% (AA); 93.4% (Vals); HLE: 64.7% w/ tools / 56.3% no tools / 54.4% HLE-Verified; AA-LCR: 79.3%; MLCR-AA: 55.6%; CritPt: 29.1%; ARC-AGI-1: 97.5% / 2: 90.4% / 3: 30.2% (benchlm.ai, first-pass snapshot)
- **Artificial Analysis Intelligence Index: 51 (#17/216)** (artificialanalysis.ai 2026-10-13 — first-pass benchlm aggregate said 50.8, felloai said 63 at high effort; current official AA figure is 51 — consistent, conflict reduced)
- BenchLM overall 79.81/100, #5 of 507 (benchlm.ai, first-pass snapshot)
- AA-Omniscience: 60.9% accuracy / 60.8% hallucination; IMO 2026: 42/42; RiemannBench: 79.0%; MMLU-Pro (Vals): 91.6% (benchlm.ai, first-pass snapshot)

Coding:

- SWE-bench Verified: 96.0%; SWE-bench (Vals): 97.0%; SWE-bench Pro: 79.2%; SWE Multilingual: 89.5%; LiveCodeBench (Vals): 89.0%; AA-SciCode: 56.4%; AA Coding Index: 78.0; DeepSWE: 68.8%; FrontierSWE v2: 52.0%; FrontierCode Ext: 63.6%; CursorBench 3.2: 70.0%; VulcanBench CII: 96.4% (benchlm.ai, first-pass snapshot)

Long context:

- AA-LCR 79.3% at the 1M window (benchlm.ai, first-pass snapshot); no separate MRCR/RULER/GraphWalks public score found.

Multimodal:

- AA-MMMU-Pro: 84.7%; Chartography: 83.0%; GDP.pdf: 83.4%; OfficeQA: 78.1%; Design Arena: 1319 Elo; BenchCAD: 0.821 (benchlm.ai, first-pass snapshot)

### Normalized scores (1–100)

> Overall = half-up mean of the five quality dims; Cost excluded. (Score changes vs first pass shown inline.)

- **Tool use: 92/100.** Unchanged — elite agentic stack re-confirmed as coherent (GDPval 1862, MCP Atlas 85.8%, Toolathlon 80.6%).
- **Reasoning: 90/100.** Unchanged — IMO 42/42, ARC-AGI-2 90.4%, GPQA ~93%; AA Index conflict resolved (current official 51 ≈ first-pass 50.8; the felloai 63-at-high-effort number was launch-window).
- **Context window: 89/100.** Unchanged — 1M re-confirmed by AA; LCR 79.3%.
- **Multimodal: 86/100.** Unchanged — AA specs confirm image input only on the API side; measured document/vision suite stays as scored.
- **Coding: 91/100.** Unchanged — SWE-bench Verified 96% + 12 more coding rows.
- **Cost efficiency: 47/100.** −3 — AA now prices the Intelligence Index run at **$5.86/task** (first pass cited $2.34 completed-task figure from a different lens) with 140M-token verbosity; genuinely expensive to run at flagship depth.
- **Overall Score: 90/100.** Mean (92+90+89+86+91)/5 = 89.6 → 90 (unchanged; cost excluded anyway). Best fit: the balanced flagship default — elite coding/agentic quality at half of Fable-class pricing; expect deprecation pressure toward Opus 5.5.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-13
- Method: deep second-pass public web research (artificialanalysis.ai model page 2026-10-13 — deprecation notice, release 2026-07-24, $5/$25 re-verified with $5.86/task and 140M-token verbosity, AA Index 51 #17/216, 8 providers, image+text input only; OpenCode Zen `/zen/v1/models` 2026-10-13 — `claude-opus-5` present as a paid ID). First-pass benchlm.ai/felloai rows retained as that snapshot. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
