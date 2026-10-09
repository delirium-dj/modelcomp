# GPT-6 Astra — findings by DeepSeek 4.1 Flash

- Source: OpenAI / GPT-6 Astra (`gpt-6-astra`)
- Date: 2026-10-09 (UTC) — deep second pass (previous Signature 2026-10-05)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Second-pass re-verification — 2026-10-09** (≥3 independent sources).
> Newly confirmed independent data: Vals AI ranks Astra **#1 on SRE Bench (56.87%)**, **CUA-bench (19.17%)** and **Terminal-Bench Science 0.1 (62.86%)**, with IOI 100.00%, Vibe Code Bench 89.59%, Terminal-Bench 4.0 59.60%, ProgramBench 5.50%, CyberBench 41.07%, Vals Index 63.13% (#6). Artificial Analysis Intelligence Index v4.3.2 **53 (#7/227)**, knowledge cutoff Apr 30 2026. LMArena `gpt-6-astra-max` 1475 (#35).
> **Conflicts surfaced:** (1) AA Index **61.2 (OpenAI-cited v4.1.1)** vs **53 (AA live v4.3.2)** — version/effort. (2) Vendor saturation claims (ARC-AGI-3 99.9%, FrontierMath T4 97.6%, ExploitBench 100%) vs mid independent AA Index 53 and a third-party neutral ARC-AGI-3 run at 62.7%. (3) Architecture "recurrent depth" is anonymized press reporting only. (4) GW-cyber/agentic numbers measured without production safeguards.
> Sources: https://openai.com/index/gpt-6-astra/ · https://artificialanalysis.ai/models/gpt-6-astra · https://www.vals.ai/models/openai_gpt-6-astra · https://en.wikipedia.org/wiki/GPT-6 · https://arena.ai/leaderboard/chat/text

## Model card

- **Name:** GPT-6 Astra (a `gpt-6-astra-fast` variant is listed separately at $20/$100)
- **Short description:** OpenAI's flagship above GPT-5.6 Sol (preview 2026-09-03, public 2026-09-04), trained on OpenAI's largest run at Stargate; the first OpenAI model to hit the Preparedness Framework **Critical cybersecurity** threshold, so exploit capability is gated behind Trusted Access/Daybreak. Superseded by GPT-6.1 Sol (2026-09-29).
- **Provider / access:** OpenAI Responses API, ChatGPT tiers, AWS Bedrock, Azure; closed; no fine-tuning.
- **Release / knowledge:** staged 2026-09-03, public 2026-09-04; knowledge cutoff Apr 30 2026 (AA).
- **IDs:** `gpt-6-astra`; Zen `gpt-6-astra`.
- **Context window:** ~1,050,000 (1M) tokens; 128,000 max output; requests >272K reprice the whole request.
- **Modalities:** text + image in, text out; reasoning; tool calls. (No audio/video/PDF-specific claims.)
- **Pricing (as of 2026-10-09):** $10 in / $50 out per 1M; cached input $1; cache writes $12.50; 272K surcharge.
- **Architecture:** undisclosed (anonymized press reports of "recurrent depth" remain unconfirmed).

### Raw benchmarks found

Agent / tool use:

- Vals: **#1 SRE Bench 56.87%**, **#1 CUA-bench 19.17%**, **#1 Terminal-Bench Science 62.86%**, IOI 100.00%
- Vendor: OSWorld 2.0 72.6%, AutomationBench 41.4%, ScreenSpot-Pro 92.7%, Terminal-Bench 4.0 57.9%
- BrowseComp 91.5; ExploitBench 100 (gated); DeepSWE v1.1 74.1%
- Tau3-Banking / GDPval-AA / Claw-Eval / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- Vendor: GPQA Diamond 96.0%, HLE 57.2%, FrontierMath T4 v2 97.6%, ARC-AGI-2 95%, ARC-AGI-3 99.9% (scaffolded; neutral run 62.7%)
- Artificial Analysis Intelligence Index **53 (v4.3.2, #7/227)** vs OpenAI-cited 61.2 (v4.1.1)
- OpenAI MRCR v2 512K–1M 96.3% (vendor)

Coding:

- Vals: Terminal-Bench 4.0 59.60%, Vibe Code Bench 89.59%, ProgramBench 5.50%
- DeepSWE v1.1 74.1% (vendor); SWE-bench Verified/Pro **not disclosed at launch**

Long context:

- 1M window; vendor MRCR v2 512K–1M 96.3%, no independent MRCR/RULER reproduced.

### Normalized scores (1–100)

- **Tool use: 92/100.** Independent Vals #1 on SRE Bench, CUA-bench and Terminal-Bench Science plus OSWorld 72.6% make it a top computer-use/coding agent; capped by the gated ExploitBench and absent Tau3/GDPval.
- **Reasoning: 91/100.** GPQA 96.0%, FrontierMath T4 97.6% and HLE 57.2% are near-frontier, but ARC-AGI-3 99.9% is scaffolded (neutral 62.7%) and AA Index 53 is flat vs peers, so 94 is not supportable.
- **Context window: 97/100.** ~1.05M input with 128K output and vendor MRCR 96.3% at 512K–1M; the 272K billing step-up is a caveat.
- **Multimodal: 75/100.** Text + image in (image band, file per Vals), text out; no audio/video and no non-text output.
- **Coding: 89/100.** DeepSWE 74.1%, TB4.0 59.6%, Vals TB-Science #1 and Vibe Code 89.59% are elite; SWE-bench Verified/Pro omission caps it.
- **Cost efficiency: 32/100.** $10/$50 per 1M (the ~30 anchor) with a 2× input surcharge past 272K; 90%-off cache read is the only relief.
- **Overall Score: 89/100.** (92 + 91 + 97 + 75 + 89) / 5 = 88.8 → 89. Best fit: agentic coding, computer-use automation and authorized security work where terminal-class performance matters more than chat economics.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-09
- Method: deep second-pass public internet research (OpenAI launch page, Artificial Analysis model page, Vals AI model page, Wikipedia, LMArena). Independent Vals rows were promoted over vendor saturation claims; the ARC-AGI-3 scaffold gap and AA index-version conflict are surfaced. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
