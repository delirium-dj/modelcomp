# LongCat 2.0 — findings by Kimi K3

- Source: Meituan/LongCat-2.0 (`meituan-longcat/LongCat-2.0`)
- Date: 2026-10-13 (UTC) — deep second pass (first pass 2026-09-29; official HF repo verified — **measured weights total 1.775T params (vs catalog 1.6T)**, MIT license, July 5 2026 creation stamp; full thinking/tool-call template machinery documented; no new independent benchmarks)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat-2.0
- **Short description:** Meituan's open-weight MoE coding/agent model, trained on 50K+ AI ASIC accelerators over 35T+ tokens; launched with Claude Code / OpenClaw / Hermes integration and a 1M-token context target. Succeeded by the agent-first LongCat 2.5 Preview (Sept 2026), which added image input.
- **Provider / access:** Hugging Face `meituan-longcat/LongCat-2.0` — **verified live, ungated, MIT-licensed, lastModified 2026-07-08, created 2026-07-05 (✓ matches the July 5 weight release)**; ~2.3K downloads/month, 194 shards (~3.5 TB storage). LongCat API Platform + web demo; Vercel AI Gateway listing. Not on OpenCode Zen (Zen carries `longcat-2.5-preview-free`, the newer sibling — ✓ still there 2026-10-13).
- **Release / knowledge:** Launched 2026-06-30 (official blog); weights + inference code released MIT-licensed 2026-07-05 (✓ HF creation stamp matches). Knowledge cutoff not stated publicly.
- **IDs:** `meituan-longcat/LongCat-2.0`.
- **Context window:** Trained on 1M-context data (CP parallelism scaled to 512+) — vendor-verified at 1M. Max output not publicly specified (template exposes `thinking_budget` with min 1024).
- **Modalities:** Text in/out only (HF pipeline confirms `text-generation`; image understanding arrived with LongCat 2.5 Preview). Reasoning: yes — **chat template supports `enable_thinking` (default true, `/think_on` / `/think_off` commands, thinking budgets)**; tool calls: **yes — template-level `<longcat_tool_call>` machinery including a built-in `code_interpreter` tool namespace** (new framework detail this pass).
- **Pricing (as of 2026-10-13):** still no verified public per-token API price for 2.0 (2.5 Preview carries $0.30/$1.20 limited-time rates; do not conflate). Self-host free under MIT but datacenter-class hardware (194 shards BF16 ≈ 3.55 TB raw — matches the ~16×H20 recipe).
- **Architecture (verified/updated this pass):** MoE; **safetensors measure 1.775T total params BF16** (corrects the catalog's 1.6T headline; ~48B active per token per first-pass reporting); LongCat Sparse Attention (LSA); 135B N-gram Embedding; MTP speculative decoding; `LongcatCausalLM` auto_model.

### Raw benchmarks found

> Meituan's launch table: in-house unified harness unless starred; no independent reproduction added since the first pass.

Agent / tool use:

- Terminal-Bench 2.1: **70.8%** (Meituan; Gemini 3.1 Pro 70.7*, GPT-5.5 73.8*, Opus 4.7 71.7*, Opus 4.8 78.9*)
- FORTE: **73.2** (Meituan; GPT-5.5 77.8, Opus 4.8 77.2); BrowseComp: **79.9** (Gemini 3.1 Pro 85.9*); RWSearch: **78.8** (GPT-5.5 85.3)
- Tau3-Banking / Tau2-Bench / GDPval-AA / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **88.9%** (Meituan; Opus 4.8 92.4); IMO-AnswerBench: **81.8** (Opus 4.8 75.3); IFEval: **90.0** (Opus 4.8 86.0)
- HLE / LCR / MLCR / CritPt / AA Intelligence Index / BenchLM: no verified public score found

Coding:

- SWE-bench Pro: **59.5%** (Meituan, Claude Code harness; GPT-5.5 58.6*, Opus 4.8 69.2*)
- SWE-bench Multilingual: **77.3%** (Opus 4.8 84.8*)
- LiveCodeBench / SciCode / Vibe / DeepSWE: no verified public score found

Long context:

- 1M-context training vendor-verified; no MRCR / RULER / GraphWalks retrieval score published (unchanged).

### Normalized scores (1–100)

> Overall = half-up mean of the five quality dims; Cost excluded. (Change vs first pass shown inline.)

- **Tool use: 79/100.** Unchanged — TB 2.1 70.8 edges Gemini 3.1 Pro; FORTE/BrowseComp/RWSearch competent; template-level tool machinery confirmed at repo; capped by single-source evidence.
- **Reasoning: 80/100.** Unchanged — GPQA 88.9, IMO-AnswerBench 81.8 (beats Opus 4.8's external 75.3); capped by missing HLE/index rows.
- **Context window: 95/100.** Unchanged — vendor-verified 1M; no retrieval-at-length percentage.
- **Multimodal: 15/100.** Unchanged — text-only (HF pipeline confirms).
- **Coding: 80/100.** Unchanged — SWE-bench Pro 59.5 / Multilingual 77.3; capped by Opus 4.8 leading every shared column and no DeepSWE/SciCode/LCB.
- **Cost efficiency: 68/100.** −2 — weights confirmed MIT and live (~3.55 TB of BF16 across 194 shards makes the self-host-hardware price even more concrete); still no verified API rate.
- **Overall Score: 69.8/100.** Mean of (79+80+95+15+80)/5 = 69.8 (unchanged). Best fit: self-hosted (or LongCat-platform) agentic coding at repo scale where MIT licensing and data residency matter more than closed-frontier accuracy.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-13
- Method: deep second-pass public web research (HF API metadata for `meituan-longcat/LongCat-2.0` fetched 2026-10-13 — MIT, ungated, 1.775T BF16 params measured, created 2026-07-05, 194 shards ≈3.55 TB, chat-template thinking/tool machinery incl. code_interpreter; Zen listing 2026-10-13 — `longcat-2.5-preview-free` present, 2.0 absent as expected). First-pass Meituan launch-table rows retained. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
