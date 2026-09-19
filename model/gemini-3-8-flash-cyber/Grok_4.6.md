# Gemini 3.8 Flash Cyber — findings by Grok 4.6

- Source: Google DeepMind / Gemini 3.8 Flash Cyber
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash Cyber
- **Short description:** Restricted **defender-only** cybersecurity sibling of Gemini 3.8 Flash (launched 2026-09-02). Same Flash-speed family, more permissive cyber mitigations, aimed at vulnerability discovery and automated patching. **Not** the public `gemini-3.8-flash` API model.
- **Provider / access:** Google **Fairwind Program** (vetted government / critical-infrastructure / software-maintainer partners). **No public Gemini API model ID found.** Not on the public Gemini API model list.
- **Release / knowledge:** Announced 2026-09-02 with 3.8 Flash. Knowledge cutoff **no verified public date found**.
- **IDs:** **no public API ID found.** No OpenCode Zen Free ID.
- **Context window:** **no verified public window found** on the Cyber product page (public 3.8 Flash is 1,048,576 / 65,536 out — do not treat that as a Cyber spec).
- **Modalities:** **no verified public modality list found** for Cyber. Public 3.8 Flash is text/image/video/audio/PDF in, text out — **not confirmed** for Cyber.
- **Pricing (as of 2026-09-19):** **no verified public rate card found.** Public 3.8 Flash intro is $0.75/$3.75 through 2026-12-31 then $1.50/$7.50 — Fairwind pricing is unpublished.
- **Architecture:** Proprietary Gemini 3.8 family; Google states both 3.8 variants share foundational intelligence plus long-running agentic loops. Param count **not disclosed**.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 / Tau3 / GDPval-AA / OSWorld: **no verified public scores found** (those tables are for **Gemini 3.8 Flash**, not Cyber)
- CyberGym Pass@1: Google claims frontier-level discovery vs 3.5 Flash Cyber and larger models — **no verified public numeric % found** on the DeepMind Cyber page or launch blog
- Internal multi-language vuln discovery (**Google**): **>70%** success (20 languages; not a public leaderboard)
- Claw-Eval / MCP-Atlas: **no verified public score found**
- Gray Swan IPI: qualitative “significant leap” for **3.8 models** (both), no numeric extracted

Reasoning / knowledge:

- GPQA / HLE / AA Intelligence Index / CritPt: **no verified public Cyber-specific scores found**
- Do **not** copy 3.8 Flash HLE-Verified **54.9%** onto Cyber without a Cyber row

Coding:

- CWE-Bench Pass@1 (**Collinear**, patching): **47.2%** (Google: vs Fable 5 **47.8%**, lower cost per rollout)
- SWE-bench / LiveCodeBench / SciCode / DeepSWE: **no verified public Cyber-specific scores found**
- Chrome Security (Google, qualitative): **2.6×** more correct patches vs best commercial models tested
- Wiz (partner): **+7.5–9.7%** recall vs other frontier models on an internal pentest bench, **2.3–5.2×** lower cost

Long context:

- **no long-context retrieval reported** for Cyber

### Normalized scores (1–100)

Scores below are **provisional** because almost every standard quality benchmark is unpublished for this gated SKU. They are not 3.8 Flash scores copied over.

- **Tool use: 78/100.** CWE-Bench 47.2% (Pareto vs Fable 5) plus >70% internal discovery and partner pentest recall support a strong defender-agent. Caps: no public TB/Tau/GDPval; CyberGym % unpublished; Fairwind-only so independent replication is thin.
- **Reasoning: 72/100.** Shared 3.8 “foundational intelligence” is a vendor claim, not a measured GPQA/HLE for Cyber. Caps: **no verified public reasoning bench**; slight penalty for missing Claw-style / Index numbers.
- **Context window: 50/100.** Maps to the undocumented / <100K-unknown band: **no published token limit**. Caps: cannot award 1M-tier points without a Cyber spec.
- **Multimodal: 20/100.** No public I/O list; treat as unspecified (not text-only proven, not image/video proven). Caps: would rise if Fairwind docs match Flash omni inputs.
- **Coding: 80/100.** CWE-Bench 47.2% pass@1 on vulnerability **patching** plus Chrome 2.6× correct-patch claim. Caps: not SWE-bench; offensive-exploit evals are intentionally deprioritized; no LiveCodeBench.
- **Cost efficiency: 70/100.** No public $ /1M. Google positions it as Flash-cost vs frontier; Wiz cites 2.3–5.2× lower cost. Caps: gated program is not $0; cannot score 88 like public Flash intro without a rate card.
- **Overall Score: 60.0/100.** Mean of 78, 72, 50, 20, 80. Best fit: **Fairwind defenders** for vuln discovery/patching — not a general chat/coding API substitute for `gemini-3.8-flash`.

---

## Signature

- Provided by: **Grok 4.6 (xAI/grok-4.6)** — 2026-09-19
- Method: Public internet research (Google blog, DeepMind Cyber page); scores are normalized 1–100 interpretations, not official vendor scores. Cyber-specific numbers only; 3.8 Flash benches not copied.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
