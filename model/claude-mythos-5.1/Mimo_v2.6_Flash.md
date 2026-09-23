# Claude Mythos 5.1 — findings by Mimo V2.6 Flash

- Source: Anthropic/`claude-mythos-5.1`
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1
- **Short description:** Anthropic's restricted-safeguard configuration of the Claude Fable 5.1 weights (same model, lighter cyber/life-science guardrails) for vetted enterprise users; powers Claude Security. Flagship-class coding/knowledge model, invite-only.
- **Provider / access:** Claude API / Anthropic, AWS Bedrock, Google Cloud, Microsoft Foundry — **invite only** (Cyber Verification Program + Life Sciences Verification Program / Project Glasswing); no standard self-serve API key, no OpenCode Zen Free ID (`noFreeId: true`).
- **Release / knowledge:** 2026-09-01 (system card / announcement); knowledge cutoff Jan 2026 (shared with Fable 5.1).
- **IDs:** `claude-mythos-5-1` (logical; API docs show generation IDs like `claude-mythos-5` for the prior Mythos 5 — confirm exact 5.1 ID with Anthropic account team). Not available as a free ID.
- **Context window:** 1M tokens input / 128K max output (Fable 5.1 / Mythos spec tables).
- **Modalities:** text, image in; text out; adaptive thinking always on (default effort high); tool calls; no audio/video out.
- **Pricing (as of 2026-09-23):** $10.00 / $50.00 per 1M in/out; cache reads **$0.25**/1M (75% cut vs Fable 5); batch 50% off. Paid; invite-gated so price is list rate for approved orgs only.
- **Architecture:** proprietary; identical weights to Fable 5.1 — difference is safeguard configuration only.

### Raw benchmarks found

> Measured numbers with (source / rank / harness). Missing rows = no verified public score found.
> Note: several agentic rows are Anthropic-published for Mythos 5.1 or its identical-weight sibling Fable 5.1; sibling rows are marked.

Agent / tool use:

- Terminal-Bench 4.0: **60.9%** (Anthropic, Mythos 5.1; Fable 5.1 sibling 55.8%)
- Terminal-Bench-Science 0.1: **52.6%** (Anthropic, Fable 5.1 sibling; Mythos track inherits capability class)
- CursorBench 3.2.0: **73.4%** (Anthropic, Fable 5.1)
- AutomationBench: **31.4%** (Anthropic, Fable 5.1)
- GDPval-AA v2: **1853** (Anthropic, Fable 5.1; Opus 5 1824, GPT-5.6 Sol 1711)
- OSWorld 2.0: **41.7%** strict / **77.9%** partial cited in secondary coverage (Anthropic; harness-sensitive)
- MCP Atlas / Toolathlon / Tau3: **no verified public score found** for Mythos 5.1 specifically
- Claw-Eval / ClawProBench: **no verified public score found**

Reasoning / knowledge:

- HLE with tools: **65.0%** (Anthropic, Fable 5.1 sibling — same weights)
- GPQA Diamond: **no verified public score found** in the 5.1 announcement rows reviewed (prior Mythos/Fable-class scores exist but not republished here — not inventing a value)
- LCR / MLCR / CritPt: **no verified public score found**
- AA Intelligence Index / BenchLM overall: **no verified public score found** for Mythos 5.1 (invite-only limits third-party indexing)
- Omniscience: **no verified public score found**

Coding:

- Terminal-Bench 4.0 (agentic coding): **60.9%** (Mythos 5.1)
- CursorBench 3.2.0: **73.4%** (Fable 5.1 sibling)
- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode / Vibe: **no verified public score found** in the sources reviewed for this exact 5.1 release (system card has fuller tables behind Anthropic's PDF; numbers not in the public snippets used here)
- Domain demos: protein binder design ~50% hit rate across 12 targets; Venus map; 2.5× GPU-kernel speedups (Anthropic) — qualitative/scientific, not standard coding benches

Long context:

- 1M window documented; MRCR / RULER retrieval: **no verified public score found** in public announcement (system card discusses long-context evals; specific % not extracted here)

Multimodal:

- Text + image in, text out (spec tables); MMMU / CharXiv / Video-MME: **no verified public score found** for 5.1 in the rows reviewed

### Normalized scores (1–100)

- **Tool use: 93/100.** TB4.0 60.9, CursorBench 73.4, GDPval-AA v2 1853 (above Opus 5 / Sol), AutomationBench 31.4 — elite agentic/tool profile; capped by missing public Tau/MCP/Claw rows and invite-only third-party verification.
- **Reasoning: 93/100.** HLE-with-tools 65.0% on identical weights is frontier; missing public GPQA/Index rows for Mythos specifically prevent a 95+.
- **Context window: 95/100.** 1M input / 128K output hits the ≥1M tier (95–100); no public MRCR % to justify higher.
- **Multimodal: 68/100.** Image + text in only (no audio/video/PDF called out, text out) → +image-in band 60–70.
- **Coding: 93/100.** TB4 60.9 (Mythos), CursorBench 73.4, science-terminal 52.6, GPU-kernel demos — top agentic coding; capped slightly by no public SWE-V/LCB row for this exact ID.
- **Cost efficiency: 30/100.** $10/$50 matches the ~$10/$50≈30 anchor; $0.25 cache reads help agentic loops but list price stays premium; no free tier.
- **Overall Score: 88/100.** Mean of Tool 93 + Reasoning 93 + Context 95 + Multimodal 68 + Coding 93 = 442/5 = 88.4 → **88** (best-fit: highest-end invite-only pick for cyber/life-science and long-horizon agentic coding when program access exists; otherwise use GA Fable/Opus siblings).

---

## Signature

- Provided by: **Mimo V2.6 Flash (opencode/mimo-v2.6-flash)** — 2026-09-23
- Method: public internet research (Anthropic announcement, system card PDF snippets, AI/TLDR, Coursiv, OrcaRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
