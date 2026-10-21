# Kimi K3 — findings by Muse Glimmer 30B

- Source: Moonshot AI / kimi-k3
- Date: 2026-10-20
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** Moonshot AI's 2.8T proprietary multimodal MoE flagship with 1M in/out for terminal coding and docs; BrowseComp 91.2%, Frontend Arena #1 at $3/$15.
- **Provider / access:** Moonshot API `platform.kimi.ai` `kimi-k3` Chat Completions; OpenAI-compatible endpoint.
- **Release / knowledge:** 2026-07-16 release; knowledge cutoff not published.
- **IDs:** `moonshotai/kimi-k3`
- **Context window:** 1,048,576 total in / 1M out, native 1M-token window verified by vendor.
- **Modalities:** Text, image, document in; text out; native multimodal with reasoning and tool calls.
- **Pricing (as of 2026-10-20):** Paid $3.00/1M input, $15.00/1M output, $0.30/1M cached; no free tier.
- **Architecture:** 2.8T total parameters MoE, 104B activated, 896 experts with 16 active, proprietary.

### Raw benchmarks found

> All figures from Moonshot AI's Kimi K3 model card / Hugging Face evaluation table and the 2026-07-16 tech blog.

Agent / tool use:

- Toolathlon-Verified: 76.5 (Moonshot model card)
- MCPMark-Verified: 94.5 (Moonshot model card)
- MCP-Atlas: 84.2 (Moonshot model card, 500-task public subset)
- AutomationBench: 30.8 (Moonshot model card)
- JobBench: 54.3 (Moonshot model card)
- GDPval-AA v2 Elo: 1686 (Artificial Analysis citation in model card)
- AA-Briefcase Elo: 1548 (Artificial Analysis)

Reasoning / knowledge:

- GPQA Diamond: 93.5% (Moonshot model card)
- AA-LCR: 74.7 (Artificial Analysis citation in model card)
- CritPt: 23.4 (Artificial Analysis citation)
- HLE-Full: 43.5 / 56.0 with tool augmentation (Moonshot model card)

Coding:

- DeepSWE: 67.5% (Moonshot model card, Kimi Code harness)
- Terminal-Bench 2.1: 88.3% (Moonshot model card, Kimi Code harness)
- ProgramBench: 77.8% (Vals AI citation in model card)
- FrontierSWE: 81.2 (Moonshot model card)
- SWE-Marathon: 42.0 (Moonshot model card)
- Kimi Code Bench 2.0: 72.9 (in-house)

Long context:

- Native 1M token context verified; BrowseComp 91.2 with 1M window and compaction strategy per tech blog.

### Normalized scores (1–100)

- **Tool use: 78/100.** Toolathlon-Verified 76.5 and MCP-Atlas 84.2 show strong tool use; AutomationBench 30.8 caps the score.
- **Reasoning: 85/100.** GPQA Diamond 93.5% and AA-LCR 74.7 support high reasoning; CritPt 23.4 limits peak.
- **Context window: 95/100.** Verified 1,048,576 token native window with 1M in/out supports long-context tasks, BrowseComp 91.2 confirms use.
- **Multimodal: 74/100.** OmniDocBench 91.1 and Video-MME 90.0 show strong document/video; WorldVQA 51.0 and PerceptionBench 58.5 limit overall multimodal.
- **Coding: 78/100.** Terminal-Bench 2.1 88.3% and ProgramBench 77.8 are strong; DeepSWE 67.5% and SWE-Marathon 42.0 cap coding score.
- **Cost efficiency: 35/100.** $3/$15 per 1M with $0.30 cached is premium pricing, no free tier.
- **Overall Score: 82/100.** Mean of five quality dims 82; best-fit for long-horizon coding and agentic knowledge work with premium cost.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-20
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
