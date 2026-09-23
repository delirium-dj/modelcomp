# Gemini 3.8 Flash Cyber — findings by GLM 5.2 Coding

- Source: Google (`gemini-3.8-flash-cyber`)
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash Cyber
- **Short description:** Google DeepMind's cybersecurity-specialized Cyber variant of Gemini 3.8 Flash (sibling of 3.5 Flash Cyber). Top use case: offensive/defensive security agents and vulnerability research.
- **Provider / access:** Google AI Studio / Vertex AI (`gemini-3.8-flash-cyber`), generateContent API.
- **Release / knowledge:** Shipped with/after Gemini 3.8 Flash (released 2026-09-02); knowledge cutoff not published.
- **IDs:** `google/gemini-3.8-flash-cyber`; no Free ID indicated on Zen in the sources checked.
- **Context window:** Not published for the Cyber variant ("Coming soon" on BenchLM); sibling 3.8 Flash is 1M — scored provisionally on the family default.
- **Modalities:** Text, image, speech, video input; text output (3.8 Flash family surface); reasoning model; tool calls.
- **Pricing (as of 2026-09-22):** Not published for the Cyber variant; sibling 3.8 Flash lists $0.75/$3.75 ($0.075 cached) — cost scored provisionally at that tier.
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

> Verified via BenchLM model record (only 2 of 481 benchmarks displayable, 2026-09-22) — the Cyber variant is barely benchmarked publicly; general dims lean on the verified 3.8 Flash sibling record and are flagged provisional.

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found (sibling 3.8 Flash: 89.4%)
- Tau3-Banking: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval: no verified public score found
- Toolathon / MCP-Atlas: no verified public score found
- CyberGym: **86.2%** (BenchLM)
- CWE-Bench: **47.2%** (BenchLM)

Reasoning / knowledge:

- GPQA Diamond: no verified public score found (sibling 3.8 Flash: 95.3%)
- HLE: no verified public score found (sibling: AA-HLE 47.8%)
- LCR / MLCR / CritPt: no verified public score found
- Artificial Analysis Intelligence Index: no verified public score found (sibling: 41, high)
- Omniscience: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode: no verified public score found (sibling: 56.6%)
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found (sibling: Coding Index 76.3%)

Long context:

- No window or MRCR/RULER number published for the Cyber variant; sibling 3.8 Flash is 1M.

### Normalized scores (1–100)

- **Tool use: 80/100.** CyberGym 86.2% (near Grok 4.6's 81.8/GPT-5.5 class) proves elite security-agent skills; CWE-Bench 47.2% mid; general tool use provisional from the 3.8 Flash sibling.
- **Reasoning: 84/100.** Provisional: shares the 3.8 Flash base (GPQA 95.3%, Index 41) with security post-training; no Cyber-specific reasoning number public.
- **Context window: 85/100.** Provisional: family default 1M assumed but unverified for the Cyber variant.
- **Multimodal: 85/100.** Provisional: 3.8 Flash family input surface (text/image/speech/video), text-only output.
- **Coding: 80/100.** CWE-Bench 47.2% is a solid vulnerability-fixing signal; general coding provisional from sibling (Coding Index 76.3%).
- **Cost efficiency: 90/100.** Provisional: at sibling 3.8 Flash pricing ($0.75/$3.75) a specialist this capable would be a bargain; Cyber pricing unconfirmed.
- **Overall Score: 82.8/100.** (80+84+85+85+80)/5 — a specialist security agent: only CyberGym/CWE-Bench are publicly measured, everything else rides on the verified 3.8 Flash sibling.

---

## Signature

- Provided by: **GLM 5.2 Coding (zai-org/GLM-5.2-Coding)** — 2026-09-22
- Method: public internet research (BenchLM model record + 3.8 Flash sibling record) on 2026-09-22; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
